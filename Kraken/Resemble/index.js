const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options,testList,oldestVersion,latestVersion } = config;

async function executeTest() {
  if (testList.length === 0) {
    return;
  }
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");
  for (b of testList) {
    if (!fs.existsSync(`./results/${datetime}`)) {
      fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    const data = await compareImages(
      fs.readFileSync(`../screenshots/${oldestVersion}/screenshot-${b}-${oldestVersion}.png`),
      fs.readFileSync(`../screenshots/${latestVersion}/screenshot-${b}-${latestVersion}.png`),
      options
    );
    resultInfo[b] = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime,
    };
    fs.writeFileSync(
      `./results/${datetime}/compare-${b}.png`,
      data.getBuffer()
    );
  }

  fs.writeFileSync(
    `./results/${datetime}/report.html`,
    createReport(datetime, resultInfo)
  );
  fs.copyFileSync("./index.css", `./results/${datetime}/index.css`);

  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../../screenshots/${oldestVersion}/screenshot-${b}-${oldestVersion}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../../screenshots/${latestVersion}/screenshot-${b}-${latestVersion}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.testList.map((b) => browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`;
}
