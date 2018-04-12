le._apps.gs45 = {
  exec: function()
  {
    blobboi = new Blob([`
<!DOCTYPE html>
<html>
  <head>
    <title>Garfield System 45</title>
    <script type="text/javascript" src="https://cdn.rawgit.com/takahirox/nes-js/4b94d927/build/nes.min.js"></script>
    <script>
    var nes;

    function init() {
      nes = new NesJs.Nes();

      console.log(document.getElementById("DisplayOutput"));

      nes.setDisplay(new NesJs.Display(document.getElementById("DisplayOutput")));
      console.log(nes);
      nes.setAudio(new NesJs.Audio());

      window.onkeydown = function(e) { nes.handleKeyDown(e); };
      window.onkeyup = function(e) { nes.handleKeyUp(e); };
    }

    function load(url) {
      var request = new XMLHttpRequest();
      request.responseType = 'arraybuffer';

      request.onload = function() {
        nes.setRom(new NesJs.Rom(request.response));
      }

      request.open('GET', url, true);
      request.send(null);
    }

    function start() {
      nes.bootup();
      nes.run();
    }

    function stop() {
      nes.stop();
    }
    </script>
  </head>
  <body style="background-color:#000;margin:0px;" onload="init();">
    <canvas id="DisplayOutput" width="256" height="240"></canvas>
  </body>
</html>
`], { type: 'text/html' });
    var gs45 = $window({
      url: URL.createObjectURL(blobboi),
      icon: "//img00.deviantart.net/2b32/i/2015/283/2/9/famiclone__garfield_system_45_by_derekautistafmf5988-d9cn1u0.png",
      title: "Garfield System 45",
      resizable: false,
      maximizable: false,
      help: "<h1>nes-js</h1>Emulator made by <a href='https://github.com/takahirox'>takahirox</a><br>Ported to Windows 93 by <a href='https://github.com/1024x2'>1024x2</a><br>Icon and Title by <a href='https://derekautistafmf5988.deviantart.com/art/Famiclone-Garfield-System-45-565426440'>DerekAutistaFMF5988</a><br><a href='https://github.com/takahirox/nes-js#default-key-configuration'>Key Mappings</a> | <a href='https://github.com/takahirox/nes-js'>Source Code</a>",
      width: 256,
      height: 242,
      menu: [
        {
          name: "Emulator",
          items: [
            {
              name: "Open ROM...",
              action: function() {
                $explorer('a/', {browse: true, explorer: true, onclose: function(ok, file) {
                  if (ok) {
                    $file.open(file, "DataURL", function(dataurl) {
                      gs45.el.iframe.contentWindow.load(dataurl);
                    });
                  }
                }});
              }
            },
            {name: "---"},
            {
              name: "Start/Reset",
              action: function() {
                gs45.el.iframe.contentWindow.start();
              }
            },
            {
              name: "Stop",
              action: function() {
                gs45.el.iframe.contentWindow.stop();
              }
            },
            {name: "---"},
            {
              name: "Exit",
              action: function() {
                gs45.close();
              }
            }
          ]
        }, {
          name: "Help",
          items: [
            {
              name: "Tested Games",
              action: function () {
                $alert.info(`
<h1>Tested Games</h1>
<table>
  <tr style="border: 1px solid black !important;">
    <th style="border: 1px solid black !important;">Game</th>
    <th style="border: 1px solid black !important;">Description</th>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Super Mario Bros.</td>
    <td style="border: 1px solid black !important;">Messed up graphics, but still playable.</td>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Super Mario Bros. 2 (USA/EUR)</td>
    <td style="border: 1px solid black !important;">Works.</td>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Super Mario Bros. 2 (JPN)</td>
    <td style="border: 1px solid black !important;">Impossible to play. This emulator doesn't have FDS support.</td>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Super Mario Bros 3.</td>
    <td style="border: 1px solid black !important;">Works.</td>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Mega Man</td>
    <td style="border: 1px solid black !important;">Doesn't work.</td>
  </tr>
  <tr style="border: 1px solid black !important;">
    <td style="border: 1px solid black !important;">Mega Man 2</td>
    <td style="border: 1px solid black !important;">Works.</td>
  </tr>
</table>`);
              }
            },
            {
              name: "Key Mappings",
              action: function () {
                window.open("https://github.com/takahirox/nes-js#default-key-configuration");
              }
            },
            {
              name: "Source Code",
              action: function () {
                window.open("https://github.com/takahirox/nes-js");
              }
            },
            {name: "---"},
            {
              name: "About",
              action: function () {
                $alert.info("<h1>nes-js</h1>Emulator made by <a href='https://github.com/takahirox'>takahirox</a><br>Ported to Windows 93 by <a href='https://github.com/1024x2'>1024x2</a><br>Icon and Title by <a href='https://derekautistafmf5988.deviantart.com/art/Famiclone-Garfield-System-45-565426440'>DerekAutistaFMF5988</a><br><a href='https://github.com/takahirox/nes-js#default-key-configuration'>Key Mappings</a> | <a href='https://github.com/takahirox/nes-js'>Source Code</a>");
              }
            }
          ]
        }
      ],
    });
  },
  name: "Garfield System 45",
  icon: "//img00.deviantart.net/2b32/i/2015/283/2/9/famiclone__garfield_system_45_by_derekautistafmf5988-d9cn1u0.png",
  categories: "Emulator",
  accept: ".nes"
};

$log("garfielf u lazy cat");
