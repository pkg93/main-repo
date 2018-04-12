le._apps.feh = {
  icon: "/c/sys/skins/w93/apps/keygen.png",
  exec: function()
  {
    var path = ".fehbg";
    var wallpaper = $store.getRaw(path);
    var args = this.arg.arguments;
    if (args.length != 0)
    {
      $store.set(path, args.join(" "));
      $explorer.refresh();
      var wallpaper = $store.getRaw(path);
    }
    if (wallpaper)
    {
      document.getElementById("s42_background").style["background-image"] = "url(" + wallpaper + ")";
      document.getElementById("s42_background").style["background-size"] = "cover";
    }
    $log.pass("");
  }
};
