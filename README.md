# amp-toolbox-optimizer-benchmark

Optimized AMP vs Original AMP.

![Result](https://herablog.github.io/amp-toolbox-optimizer-benchmark/result-4g.gif)

```shell
npm install
npm run build -- https://news.ameba.jp/amp/entry/20180214-742/
# starts local server
npm start
# publises the pages as GitHub pages
git push origin
```

## Result
### WebPagetest

#### 3G

https://www.webpagetest.org/video/compare.php?tests=180214_BN_ce92317e0be56ea4550c8eb6c06d04d7,180214_ME_3e5f2f296721d9b2f53ee87e7c1fb13d

Chrome on a Motorola G (gen 4) tested from Dulles, Virginia on a 1.6 Mbps 3G connection with 300ms of latency.

#### 4G

https://www.webpagetest.org/video/compare.php?tests=180214_N1_2165c35768e734a8ba19a3462e06c2d0-r%3A3-c%3A0-l%3AOptimized,180214_XX_f6533a777ee9ee6f9e0506556fdf4a10-r%3A1-c%3A0-l%3AOriginal,

Chrome on a Motorola G (gen 4) tested from Dulles, Virginia on a 9 Mbps 4G connection with 170ms of latency.


### Diff

![Diff](https://herablog.github.io/amp-toolbox-optimizer-benchmark/diff.png)

https://www.diffchecker.com/r7ByM0Lp
