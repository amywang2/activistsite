// Take action page form
var script = document.getElementById("script");
var scriptButton = document.getElementById("scriptButton");
if (scriptButton) {
  scriptButton.addEventListener("click", displayScript);
}

function displayScript() {
  var name = document.getElementById("userName").value;
  var location = document.getElementById("userLocation").value;
  var representative = document.getElementById("userRep").value;

  script.innerHTML = "Hi, my name is " + name + ", I live in " + location + ". I wanted to ask the " + representative + " to support passing major climate and clean energy investments that match the scale of the crisis. The Senate has passed Inflation Reduction Act, and I am asking you to vote yes too. We must pass this bill to put us on track for President Biden’s goal of cutting carbon pollution in half this decade. We cannot delay any longer. We need the Inflation Reduction Act now!";
}

//Take action page action item generator
var actions = [
  "Use reusuable bags when going shopping",
  "Avoid plastic utencils/straws when out"
]
var actionButton = document.getElementById("actionButton");
var actionItem = document.getElementById("actionItem");
if (actionButton) {
  actionButton.addEventListener("click", actionGenerator);
}
var actionIndex = 0;

function actionGenerator() {
  actionItem.innerHTML = actions[actionIndex];
  actionIndex++;
  if (actionIndex==actions.length) {
    actionIndex=0;
  }
}
