/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "806af5fd178895b599282fd58afa370e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.2c48f3fa.css",
    "revision": "c553122e31a968872638867610f0c315"
  },
  {
    "url": "assets/img/add_user_id6_result.408e5bad.png",
    "revision": "408e5bad4a53638eac0785682c9f8476"
  },
  {
    "url": "assets/img/add_user_id6.882316f9.png",
    "revision": "882316f9053dc321f1e5ed44c0712541"
  },
  {
    "url": "assets/img/delete_user_6_result.ad54b476.png",
    "revision": "ad54b476daae9f0e2757ec8866b1c2fb"
  },
  {
    "url": "assets/img/get_all_users_after_delete_result.980a2bd4.png",
    "revision": "980a2bd4e4376cce4e1d4e439fbc4ead"
  },
  {
    "url": "assets/img/get_all_users_result.6ee94d45.png",
    "revision": "6ee94d456f789df68fadebe0fdd803af"
  },
  {
    "url": "assets/img/get_user_6_after_delete_result.5ddd5fe2.png",
    "revision": "5ddd5fe296ade5e68fc0b915edee7410"
  },
  {
    "url": "assets/img/get_user_id1_result.a98f4453.png",
    "revision": "a98f44537e020bd719e30df02fd78bef"
  },
  {
    "url": "assets/img/get_user_id6_after_update_result.652dab2d.png",
    "revision": "652dab2ddeacaae0034b4e9e6106287c"
  },
  {
    "url": "assets/img/get_user_id6_result.5b13ffc6.png",
    "revision": "5b13ffc6bf8b661f0584a17af4edaa0c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server_start.a630f772.png",
    "revision": "a630f77222b95254e2057c0df22c7051"
  },
  {
    "url": "assets/img/Shema.b32c2104.png",
    "revision": "b32c2104c309d360a83d183b6c91e325"
  },
  {
    "url": "assets/img/update_user_6_result.0c5cac2c.png",
    "revision": "0c5cac2c3e368dbd521275bef81a8668"
  },
  {
    "url": "assets/img/update_user_6.588c04b5.png",
    "revision": "588c04b53f2afe2a24450abb079dc83b"
  },
  {
    "url": "assets/js/10.57add6df.js",
    "revision": "3e06871118caf4e945d5682344961018"
  },
  {
    "url": "assets/js/11.24f4cb99.js",
    "revision": "57dd708054f6e689854840e57e5a3444"
  },
  {
    "url": "assets/js/12.69edf443.js",
    "revision": "3db1bdf6a85b0d611e34dd2d7c951718"
  },
  {
    "url": "assets/js/13.7c9f04e5.js",
    "revision": "ec9767ed3ac34d9905f9a3d80e8ffc07"
  },
  {
    "url": "assets/js/14.a30df9fa.js",
    "revision": "c385e1fd9ebafc8644a11cb9eaa290e7"
  },
  {
    "url": "assets/js/15.166298c2.js",
    "revision": "0635389f76198b3468b5de4ca8de23a9"
  },
  {
    "url": "assets/js/16.66bdf40d.js",
    "revision": "a77520df975cf0f32fb7d586ffea01bf"
  },
  {
    "url": "assets/js/17.e4485678.js",
    "revision": "c98a02a109a1ead0101f6d7421a557c4"
  },
  {
    "url": "assets/js/18.abf058e5.js",
    "revision": "368632d79b37f815e07783fee0be5e1f"
  },
  {
    "url": "assets/js/19.b0c97371.js",
    "revision": "a5ac429eb1f1e0fee87185fde20e7123"
  },
  {
    "url": "assets/js/2.6e00f957.js",
    "revision": "d19821c0505a1eac5c7f3d31f8a3f165"
  },
  {
    "url": "assets/js/20.76966545.js",
    "revision": "bc6a7790dd6930f5dd59f3415c68e2c3"
  },
  {
    "url": "assets/js/21.b089bbff.js",
    "revision": "55a93f0054b32a3d02788f0008bf1788"
  },
  {
    "url": "assets/js/22.9c242e2e.js",
    "revision": "e90b202cde3d44837f3388cf3459e83f"
  },
  {
    "url": "assets/js/23.6c9ede6b.js",
    "revision": "20cd3187a889c9d3c91ccd53fc875528"
  },
  {
    "url": "assets/js/24.9056ccb5.js",
    "revision": "c7281a950e71744224cf0393d28c602e"
  },
  {
    "url": "assets/js/26.fd7ca547.js",
    "revision": "8d5d1a16e8de52868abde4bb44cfdb2e"
  },
  {
    "url": "assets/js/3.bef5983e.js",
    "revision": "82530227fa45728bf353de33f9d66ec9"
  },
  {
    "url": "assets/js/4.9df86af0.js",
    "revision": "fba911941667ad0a8c825b98be5e124e"
  },
  {
    "url": "assets/js/5.e730cf58.js",
    "revision": "6574b25449fbc2ddc43c86323aa9cd1f"
  },
  {
    "url": "assets/js/6.1692c444.js",
    "revision": "91663a1e420c7020b0c8b3ad1a0fb864"
  },
  {
    "url": "assets/js/7.6e9f456f.js",
    "revision": "9a85d7fc2a28487208e9e10f66e272b8"
  },
  {
    "url": "assets/js/8.19ad6072.js",
    "revision": "46d579629c58e2295918d877dd77e755"
  },
  {
    "url": "assets/js/9.2a4f56c4.js",
    "revision": "34fbe025b1a6c4739a9bb5d62e400eea"
  },
  {
    "url": "assets/js/app.c093d576.js",
    "revision": "5d91067c1c87cced4f001008d352324a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d34092ac10cbb403c25790f6bd8ede5d"
  },
  {
    "url": "design/index.html",
    "revision": "e746f48e1d3d5931b36ac81bbc204fd1"
  },
  {
    "url": "index.html",
    "revision": "7568321192a77106cc53b66c6bbc3523"
  },
  {
    "url": "intro/index.html",
    "revision": "a340aad1ab3ad44ef385ea3dda59fc81"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "134f441fe193a01b05dd2e3916630db1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4f777e9edb443fc1243493caf79855cc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eea3981d498a5420101433d58aa4b6b0"
  },
  {
    "url": "software/index.html",
    "revision": "f868db029b840e8eae97bb07005900e4"
  },
  {
    "url": "test/index.html",
    "revision": "9401b739178fa71c3ec96e02a5f4d4ab"
  },
  {
    "url": "use cases/index.html",
    "revision": "155ba7651dfbb4850c05c5d5b6c7d8e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
