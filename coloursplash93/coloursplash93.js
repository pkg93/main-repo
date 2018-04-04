console.group("[coloursplash93]")
console.log("[coloursplash93] Loading CSS...")
try {
  if (document.contains(document.getElementById("coloursplash93"))) {
    console.log("[coloursplash93] Injected <style> already exists, removing it.");
    document.getElementById("coloursplash93").remove();
  }
  cssTag = document.createElement('style');
  cssTag.id = "coloursplash93";
  document.head.appendChild(cssTag);
  console.log("[coloursplash93] Injected <style> into <head>!");
  css = localStorage["coloursplash93.css"];
  if (css === undefined) {
    throw new Error("No CSS found.");
  } else {
    cssTag.innerHTML = css;
  }
} catch (err) {
  console.error("[coloursplash93] " + err.toString());
}
console.groupEnd();

le._apps.coloursplash93 = {
  exec: function() {
    const args = this.arg.arguments;
    const version = "v1.0.0";
    $log("Refreshing...");
    css = localStorage["coloursplash93.css"];
    if (css === undefined) {
      css = localStorage["coloursplash93.css"];
      $alert.error("ERROR: No CSS found. Created coloursplash93.css in /a/.", function () {});
      localStorage["coloursplash93.css"] = "/*insert cool css here*/\n\n";
    } else {
      document.getElementById("coloursplash93").innerHTML = css;
      $alert.info("Done!", function(){});
    }
  },
  icon: "//files.gamebanana.com/img/ico/sprays/5a177c37e9c06.png",
  name: "7.8/10 too many toads"
};
