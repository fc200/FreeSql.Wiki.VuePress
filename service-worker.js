if(!self.define){let s,e={};const a=(a,t)=>(a=new URL(a+".js",t).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(t,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let l={};const d=s=>a(s,i),f={module:{uri:i},exports:l,require:d};e[i]=Promise.all(t.map((s=>f[s]||d(s)))).then((s=>(r(...s),l)))}}define(["./workbox-33d91895"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-pGfvbLRH.js",revision:"07e3e1fd6584bb88a2449ab240ff29e6"},{url:"assets/404.html-RzfQBDrA.js",revision:"636550715015effb125af5f229a3dd7d"},{url:"assets/ado.html-Gm7cLNHs.js",revision:"fe6fb7d27e190542f0aaea622596443b"},{url:"assets/ado.html-qbNav7uH.js",revision:"b25d154d33dedd28fd1d0817cdee39b2"},{url:"assets/aggregateroot.html-ariRFWL5.js",revision:"3f851a37c2113a665d10f9df54b9e58f"},{url:"assets/aggregateroot.html-bRNlU-kg.js",revision:"d0d3ba8143b0eb9f3eed2d27a1fa7c67"},{url:"assets/aop-freesql-autofac.html-Lfm1MQH9.js",revision:"17d8614039a2346bd6fa88fcbab19fbf"},{url:"assets/aop-freesql-autofac.html-mTbdGbaA.js",revision:"55e18c2a1c4d03e1761c278bf8f2382b"},{url:"assets/aop.html-7meROLhF.js",revision:"cba3a9ef228ea8d326dd8d96f4fb6d1b"},{url:"assets/aop.html-WXOw9IJS.js",revision:"0c5b8a20934462bee9811a0033b110d5"},{url:"assets/api.html-IXiFV5aW.js",revision:"c70edc957acfc4efb35ee45c1e5946e7"},{url:"assets/api.html-r5wU8hD5.js",revision:"6cf5709539e01bff752781fb6b8b2aa4"},{url:"assets/app-feosycyc.js",revision:"0bfb046845de6bf4b89bb296b890a16d"},{url:"assets/awesome-freesql.html-8ieJgimw.js",revision:"295fefe786973573d0533c483ed79ea1"},{url:"assets/awesome-freesql.html-GfdHtjlJ.js",revision:"65cdf4854793815301eef98f781d9101"},{url:"assets/BaseEntity.html-88aoOEmL.js",revision:"7fdf17cc14794149704230675373aafe"},{url:"assets/BaseEntity.html-zHmurtQn.js",revision:"bd7b4e6996c7a6bfff285c65be0eefa8"},{url:"assets/cascade-delete.html-4Ij54pSy.js",revision:"58bc91e8463479382dc1eda12863a25c"},{url:"assets/cascade-delete.html-yy9u_7bC.js",revision:"1e7f5569089b58f290069ba577a5eaf8"},{url:"assets/Cascade-Saving.html-7EcRAZT9.js",revision:"210c1f8cedbd4aee8a28e9a7f489a748"},{url:"assets/Cascade-Saving.html-lTj6Rmf1.js",revision:"a66751f6105f54e8cdd907e4b62d737f"},{url:"assets/cascade-saving.html-sieNGuOs.js",revision:"e1a7fd92aaebc505c75c9e6ee51a7b0e"},{url:"assets/cascade-saving.html-TbZoWV1B.js",revision:"bb4d3736432df076c917dbabfce31495"},{url:"assets/change-log.html-IrB_yZ9D.js",revision:"be2d81fdf028c894da0ad2144ea9b4d0"},{url:"assets/change-log.html-vIwcus8e.js",revision:"728a3890d226ee9da183e06cb301ae12"},{url:"assets/code-first.html-4w5tWAYi.js",revision:"0141f01820f980c3eaf5f1a672c745e1"},{url:"assets/code-first.html-t5ei0hmo.js",revision:"da7d27955c6ef2fcc2d1b1120910e58d"},{url:"assets/CodeFirst-Mode.html-MVOUWjp0.js",revision:"c9230260acb90778eb17afe2f2187330"},{url:"assets/CodeFirst-Mode.html-yp3Pr2kC.js",revision:"9b074d1abb572f13fdb5262dbfc8407b"},{url:"assets/config-entity-from-db-first.html-xbjiiWdb.js",revision:"6dcc2ffb03a1a464b812697ce1f75d44"},{url:"assets/config-entity-from-db-first.html-ZJde3bII.js",revision:"966bbfd47e168ff07d51340fb3552c33"},{url:"assets/contributing.html-RcqA4JS7.js",revision:"f8e6e64470d90b1e6a3823b5e31d0b95"},{url:"assets/contributing.html-vnwlxNH3.js",revision:"5c13522cf30ee364626cb284fa93493e"},{url:"assets/custom-attribute.html-6D_IXl7L.js",revision:"31c6938434d4a5b2ca0666d525a60022"},{url:"assets/custom-attribute.html-ChAyZP1v.js",revision:"0d5a8fac45ed8ff0a53f6a8190076e14"},{url:"assets/db-context.html--lJ9yVTC.js",revision:"228628e6d804f5c0774bac4b27b45a15"},{url:"assets/db-context.html-MU5rYhYV.js",revision:"13894fb98d26e028bb0a3b9ec11d5bf0"},{url:"assets/db-first.html-01VuWT9d.js",revision:"aeda4313b565444f6b52fe002b719727"},{url:"assets/db-first.html-vjjyDOPr.js",revision:"f03d2e56b16c8b834408f1b98bfd40ff"},{url:"assets/Delete-Data.html-6opoEZfo.js",revision:"b5a109b89a8c1deb29db6821a7f8ff0a"},{url:"assets/Delete-Data.html-kEdtC0q7.js",revision:"1ede887c07583580870218fae40e4bb3"},{url:"assets/delete.html-lkJR7N0_.js",revision:"6e2245870337a3211ccbf3500b4e90db"},{url:"assets/delete.html-M4yLY-DR.js",revision:"bbaea6c8786c2b653990456206072e2a"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/donation.html-1_Ea7D0H.js",revision:"d462144065daf89fdfeaf1e90eb60f9e"},{url:"assets/donation.html-iJt8RXkt.js",revision:"38eafdcfa62ca611b9c1fb436b8752b2"},{url:"assets/dynamic.html-7zejTKY3.js",revision:"322d85575f2b0292d95b45579d794a91"},{url:"assets/dynamic.html-FQXJnPIT.js",revision:"7a6ef4180f005bc7202eac6c5a86d99c"},{url:"assets/entity-attribute.html-64_H5PG7.js",revision:"c35f3f029b77fef4f8ff86e94637a1f4"},{url:"assets/entity-attribute.html-r0cNZknG.js",revision:"d14c74d9dfb53d0eaab5e65a18fa7bbf"},{url:"assets/Entity-Relationship.html-I05OaBcS.js",revision:"147c2c43748bb4791f3f12a42951d3e0"},{url:"assets/Entity-Relationship.html-SR_rvuxU.js",revision:"4809c7a70d8adc36b4154bd9a3148bd8"},{url:"assets/expression-function.html-PxlG-hsM.js",revision:"9459541e8261416653a028607f0f92c8"},{url:"assets/expression-function.html-TRS32BZs.js",revision:"6f9e186e0e278b4703263146e26d49a3"},{url:"assets/faq.html-R22y_6o8.js",revision:"895b4611efb615a83c5e5de7dae0ac14"},{url:"assets/faq.html-Z0u1iWhn.js",revision:"f00350f2a2019f99fcd2a790839f5781"},{url:"assets/filters.html-oGvRaPQJ.js",revision:"05a3798293d46aebcee38d6b9feb23e3"},{url:"assets/filters.html-Rq_hWwAV.js",revision:"74e42745b712dde3209c7f316346e470"},{url:"assets/fluent-api.html-UzrysNHJ.js",revision:"3f9aa79b5224cf8f765bd3f336212df4"},{url:"assets/fluent-api.html-ZhbwwLdL.js",revision:"40f7fa3649549953a73c5d3f426e230e"},{url:"assets/freeim.html-c2I0rdQF.js",revision:"8c71a6cc6db337de7daba9f1a07e597b"},{url:"assets/freeim.html-dcvz2_91.js",revision:"8003620d07ce308faf59bb04610991ea"},{url:"assets/freeredis.html-Mnf_qmA0.js",revision:"bd9d03dec9efd88662170cfb6dc71b76"},{url:"assets/freeredis.html-zFkWlTlX.js",revision:"95ecc3a9371a331d0fa1a04ca6378598"},{url:"assets/freescheduler.html-YNqadREp.js",revision:"565f8d5fbfff6e4b782c10f76d25aa12"},{url:"assets/freescheduler.html-Z9OImbJq.js",revision:"591b88356379f2ee5b909945a1fe0913"},{url:"assets/freesql-auditlog.html-LqWZfGys.js",revision:"d79914cb7cf492826d4c74088f574775"},{url:"assets/freesql-auditlog.html-MDmTkhwn.js",revision:"cc8dca7cc9e57e30aff4779d527046a8"},{url:"assets/freesql-cap.html-bsPamEDJ.js",revision:"f3c6f0f81f00d163811af2981f6512b0"},{url:"assets/freesql-cap.html-Sltikv3h.js",revision:"048971375b3d64633fa823808d73c717"},{url:"assets/freesql-docker.html-9JNy2PRs.js",revision:"d582d89c5a8393b8d5bd3be437bec30d"},{url:"assets/freesql-docker.html-dGFvM9ci.js",revision:"43958f75c125538738b9fbac71b0a1c2"},{url:"assets/freesql-extensions-baseentity.html-7gm4B1hc.js",revision:"4c2b827dedefa42c8690bb7a5124a59e"},{url:"assets/freesql-extensions-baseentity.html-lyPHErzs.js",revision:"3619488d90878125605ba2ce8e1dc8fa"},{url:"assets/freesql-extensions-jsonmap.html-kqmC6IMn.js",revision:"dac24cf5be00c0c8c779d3fe775dc556"},{url:"assets/freesql-extensions-jsonmap.html-TLKgKx-8.js",revision:"d130d33eea0c8221da79baa7d8b5b20a"},{url:"assets/freesql-provider-custom.html-O4TDKdrI.js",revision:"a8347b5833715e8d4728bc64884b257d"},{url:"assets/freesql-provider-custom.html-Z9Z9YFLH.js",revision:"38b1d313e84d60a86777de70cf1c68ad"},{url:"assets/freesql-provider-mysqlconnector.html-6FmEuuAw.js",revision:"3c4c588cd14e664c8bd8aa03dcba7a06"},{url:"assets/freesql-provider-mysqlconnector.html-rR6c_Hny.js",revision:"c350bea681147bc86ef129224ce9bee9"},{url:"assets/freesql-provider-odbc.html-Eds1jqGu.js",revision:"bc688e10acdfae99c98bc239705fc7a8"},{url:"assets/freesql-provider-odbc.html-ZGtC7Mqa.js",revision:"ba9627cccdb4aa277ca40ac3621be476"},{url:"assets/freesql-provider-oracle.html-fZ_c7HV_.js",revision:"5d620a2382f19e1c6110f1df5125f48a"},{url:"assets/freesql-provider-oracle.html-Tzd44zgQ.js",revision:"5e6c1199131ff77f48dd14dc288ea0fc"},{url:"assets/freesql-provider-postgresql.html-CM9GP-qQ.js",revision:"c7466128841e80f25b58792fa2e30212"},{url:"assets/freesql-provider-postgresql.html-ZAHVR8su.js",revision:"5c9f552948a7d128e29f6e2a39ef4a89"},{url:"assets/freesql-provider-questdb.html-cm8BH30u.js",revision:"e41f20ee4b96c920c137a809479c8b5e"},{url:"assets/freesql-provider-questdb.html-Ih0bE7Aj.js",revision:"4b43da2c8309f0689b1f2f1cb964dd0c"},{url:"assets/freesql-provider-sqlitecore.html-jF-X4cDJ.js",revision:"03036bc92a0b903518fb5289413468da"},{url:"assets/freesql-provider-sqlitecore.html-ZmfxVkvZ.js",revision:"5297955e5d7323f76e522aeb96fd6512"},{url:"assets/freesqladminlte.html-GpeLPBmE.js",revision:"2a1ca639e4f7df393e73642c3d71cea3"},{url:"assets/freesqladminlte.html-MKuaQhDi.js",revision:"0324de9645fb1442a5b2bdd5fd008fe0"},{url:"assets/getting-started.html-MfduDDkl.js",revision:"3ad05a2fa750547cb566b8137df5d9cd"},{url:"assets/getting-started.html-mXf8xbwA.js",revision:"593958256f312de337490a02985c7e1e"},{url:"assets/getting-started.html-owEdf7ED.js",revision:"8f5ec1030c9411b1fe28b4d8e4af52da"},{url:"assets/getting-started.html-WjqwEHci.js",revision:"4dae5edf67e0b7fcec153cf552ecac49"},{url:"assets/Greed-Loading.html-iLGT7CvK.js",revision:"f9298cf158322d8d4941b4faf22417a2"},{url:"assets/Greed-Loading.html-Q3CG8Y-t.js",revision:"136d2b75ad9cae70f12c7b5a7ca5e7a0"},{url:"assets/Group-Aggregation-Query.html-AgeNIePQ.js",revision:"feec62ba856ee05a71e151ef7ad765bf"},{url:"assets/Group-Aggregation-Query.html-zf0HGvQU.js",revision:"cc492f836e808d13d9b2672b40de1fcc"},{url:"assets/idlebus-freesql.html-5RH4DAdJ.js",revision:"c270b725de7243fe1e60283fbc774017"},{url:"assets/idlebus-freesql.html-XTm-QQ-b.js",revision:"eb834da2e0b250a453adafb1be196f29"},{url:"assets/ifreesql-context.html-0MVD9euz.js",revision:"fa821825205321b737def1571b602132"},{url:"assets/ifreesql-context.html-5DDqF39K.js",revision:"72df61ebb0f5e88a9171ed5f13d18742"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html--5_7UAkC.js",revision:"a902d5bd82a96d881d8209ca4d161142"},{url:"assets/index.html-71tbQaKN.js",revision:"6111368094d9b922594fe71e2d527e45"},{url:"assets/index.html-K-SII3La.js",revision:"8cc8bce92439cfd8decbb37e7b626dda"},{url:"assets/index.html-kjFUTZGE.js",revision:"82ce4970ba8f2720e967d0aebc1cc4f9"},{url:"assets/index.html-MJYHm3R9.js",revision:"3e061c045b9eed7ecf03cf8e8661812e"},{url:"assets/index.html-mu-ZaAwT.js",revision:"d18b98a6f39268f99ad1eef0945e1369"},{url:"assets/index.html-mwrIc854.js",revision:"93d3f224567b86b21d4a503011f96802"},{url:"assets/index.html-NVvqr76V.js",revision:"1d51e1c80ba19513c63a2e85d35f29b5"},{url:"assets/index.html-qohOLZJv.js",revision:"67d1638048b752535fa3957184860a05"},{url:"assets/index.html-sE-nGNKr.js",revision:"747ff3bc5445185052396ad95570683e"},{url:"assets/index.html-sWkXIPnM.js",revision:"f9aff33a7d2460cc7b09dc3393e09545"},{url:"assets/index.html-vJmkmwAP.js",revision:"99d6ed4c7a1e7ae0084da541c0d7c3e9"},{url:"assets/Insert-Data.html-J9O-EJoj.js",revision:"aaa15f32b1c016e7a0d9c09cc495a46c"},{url:"assets/Insert-Data.html-XftUBIEQ.js",revision:"caf6fa1bca36b53179d5377186032414"},{url:"assets/insert-or-update.html-DjFw_SKm.js",revision:"73d74279b7d112cd085c298c1a8737ab"},{url:"assets/insert-or-update.html-GkqgeU4Z.js",revision:"898e125fa1f4ab22d1c3d52f1afa6c22"},{url:"assets/insert-or-update.html-nN48LJ3J.js",revision:"0ec287b50f80eb2da648d0e1b30bbbaa"},{url:"assets/insert-or-update.html-XFxD1L_o.js",revision:"44cc566a05f0c7642a521ece8aca767b"},{url:"assets/insert.html-hE7Oi_GD.js",revision:"018af5ca0c18be8a8784ad9b851fcb81"},{url:"assets/insert.html-XtRR39w7.js",revision:"d941c1a2f13cd2ecfe4e73f819445d4c"},{url:"assets/install.html-91ejX6zI.js",revision:"663feda897950adc2589cb8887fd2857"},{url:"assets/install.html-JcxTERIW.js",revision:"1e6dee1688152c76173613aeca06c150"},{url:"assets/install.html-qpmvLPuz.js",revision:"98938bd6e249bbac6cb78d160c082ae7"},{url:"assets/install.html-z8k5-qJK.js",revision:"68ac91d6cfe20e954a2204646b95d656"},{url:"assets/iselect-depcopy.html-JbcMWeI-.js",revision:"669cbe4496c5989fd70e497387493bfe"},{url:"assets/iselect-depcopy.html-oumSsWu-.js",revision:"5537132cf8f289937b7504ac2b821f6f"},{url:"assets/issues-expression-groupbysum.html-BY4TDNCc.js",revision:"9d2f805aa764efae1b070c84b459ea4f"},{url:"assets/issues-expression-groupbysum.html-O31_-iWs.js",revision:"84b2b9347875d100e7fe9e1dcd9bab3c"},{url:"assets/issues-in-valuetype.html-lj4DiwPn.js",revision:"68a60cfbea384e3117c862e5eb1a8a6d"},{url:"assets/issues-in-valuetype.html-VmPPtrOT.js",revision:"fc9ec052f1d5ca111b42c9dd69db5e10"},{url:"assets/issues-mysql5_5.html-nsg_hmWv.js",revision:"c7082392de5885d36702b806888d016e"},{url:"assets/issues-mysql5_5.html-sUDPyZVo.js",revision:"52135951f2da5505757ce6b0e8fcb9b3"},{url:"assets/Lazy-Loading.html-5HdBvH5E.js",revision:"52f7bbd6a0da7d87db11f7f1616b63a6"},{url:"assets/Lazy-Loading.html-PX78MiBH.js",revision:"5bb4bbd0af1c0fabe2715fd2dbeefd80"},{url:"assets/Linq-to-Sql.html-75XuHA6T.js",revision:"34d747cf05fccf5643e1e1d64fcaa9e8"},{url:"assets/Linq-to-Sql.html-DxgQ0Tet.js",revision:"2483f2dadfd841ba80a8e3bf0fb2772c"},{url:"assets/linq-to-sql.html-jNRKtcmi.js",revision:"c01883db5ce5bdeb1ba2f8dc9acc2be9"},{url:"assets/linq-to-sql.html-rWPZYYWL.js",revision:"90ab9366a5d608999bfa17b2e90dba1a"},{url:"assets/lowcode.html-_jHO97rA.js",revision:"6505e630024f23d956ad8122f28b95f9"},{url:"assets/lowcode.html-WUGhiJ5_.js",revision:"9f9fa6260a1e8c985a6ee490d107d256"},{url:"assets/more.html-4sPEl7Mb.js",revision:"e465d9b7401f462926290703a99c6b89"},{url:"assets/more.html-R1MfLrKg.js",revision:"aa9e97ef607c407594e087cfed7696a1"},{url:"assets/multi-tenancy.html-3xbSuqDO.js",revision:"5a662cd231b82418b47205144e607242"},{url:"assets/multi-tenancy.html-ENoR-7fn.js",revision:"b7b2183a89e018ad47b76c50d6862f99"},{url:"assets/navigate-attribute.html--dpCX1zx.js",revision:"423c1d3e34ca17785059d43a0ef8ec69"},{url:"assets/navigate-attribute.html-iVjIp9Ot.js",revision:"fb831f80c6e4395157f1367569809bdc"},{url:"assets/otherworks.html-Fn9Z5JPD.js",revision:"21bcf03fa4f85eb530323eeda6326e3b"},{url:"assets/otherworks.html-VSKWrzS7.js",revision:"a5640cd1422237ddab405eab7cad4fab"},{url:"assets/Pagination.html-KLXTG3k_.js",revision:"025841b8b8034b72ace665149aa7afc4"},{url:"assets/Pagination.html-odnTSd-x.js",revision:"b32ab0b29fda486a8af1211d3fa62baf"},{url:"assets/paging.html-Hve3K2UI.js",revision:"1e7f6a0640daa81283e7ef5e62a41173"},{url:"assets/paging.html-ZY7VWR7G.js",revision:"3ace4e64104ea6942412ac0efd0c5bb6"},{url:"assets/Parent-Child-Relationship-Query.html-mexD6YCF.js",revision:"845a42abf23dbf5557555d7806e6869c"},{url:"assets/Parent-Child-Relationship-Query.html-TZIOTkoK.js",revision:"266fb5881ea40b3ca0bb2c7b57e0eed1"},{url:"assets/performance.html-fACJmNwe.js",revision:"5190d97f34c47f217c138a76ff8d90b6"},{url:"assets/performance.html-z-EEKB8L.js",revision:"84a083aa968b09abc5006941388abc9b"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-nSshCmeW.js",revision:"36a3562cec95dfda51303e5e914ba149"},{url:"assets/Query-Data.html-qa5WNF1H.js",revision:"3fdeff2c4caab1437d45c7b3eb92ab11"},{url:"assets/Query-from-Multi-Table.html-aQ8G4GV5.js",revision:"9478229c33937db019bdbfde40a57951"},{url:"assets/Query-from-Multi-Table.html-EgSlsW8V.js",revision:"1b056e6e2e9e824a4a05b947e6c8bbc2"},{url:"assets/Query-from-Single-Table.html-5SyD6VU8.js",revision:"03490b345ad8f587d5df51ada515ee19"},{url:"assets/Query-from-Single-Table.html-ft2H7JEg.js",revision:"4664ce303b2a64bfd157fdafc6a6ae5f"},{url:"assets/read-write-splitting.html-aOI-G2yV.js",revision:"596baf2e5a4039902f56dea32c6acada"},{url:"assets/read-write-splitting.html-KmujsUKm.js",revision:"158163be511d5a3e914a954bfbb043a3"},{url:"assets/Repository-Layer.html-omNsxASZ.js",revision:"734611fd83b64df9f23764521fb229ae"},{url:"assets/Repository-Layer.html-Xah0yErG.js",revision:"ad296102dbeec8e995816a410e23d165"},{url:"assets/repository.html-6_QxBbYc.js",revision:"f2722a30c61c0cfd3222906fdbc43d59"},{url:"assets/repository.html-CzJr8x41.js",revision:"84531dad864e4b11a11ddab726e0cc67"},{url:"assets/Return-Data.html-qFqsuXC-.js",revision:"635be5fbaf8601551e1730e06ceb5b6d"},{url:"assets/Return-Data.html-XC8VrfsB.js",revision:"f559a0bbd6dfec431f80b90ed50a8d57"},{url:"assets/select-as-tree.html-IdTuAoMc.js",revision:"de929b8b931e9e8d311b7f33125bbca6"},{url:"assets/select-as-tree.html-IZ7XQxek.js",revision:"75f97629b372a3bd83098a7a1dff5a9c"},{url:"assets/select-group-by.html-i0aByiWb.js",revision:"d8fa059d01980374380f8f6d69de5ea8"},{url:"assets/select-group-by.html-SxuvO5bh.js",revision:"cebf820cd84dd3dfa749a949734d3e54"},{url:"assets/select-include.html-6gj1SSFf.js",revision:"8d83c995589239d9dca9b22035f9e483"},{url:"assets/select-include.html-Wy7JSqAQ.js",revision:"906c1f31477ba532811d12735c9e1b78"},{url:"assets/select-lazy-loading.html-GQYKeu9J.js",revision:"d0760ccbedff2364bf3e5a25a9d20b02"},{url:"assets/select-lazy-loading.html-TaYteIjf.js",revision:"818e1e1fce2017ff25ecef322fd8d717"},{url:"assets/select-multi-table.html-3ywtMrMe.js",revision:"684aca04225eed97b36c0c9825edebc7"},{url:"assets/select-multi-table.html-rHx_nxeG.js",revision:"eeb4fcce84a8d1ae5ea79e6d1985b715"},{url:"assets/select-return-data.html-3p3sT68i.js",revision:"1573a435cd0e4523cf23b967a66dd762"},{url:"assets/select-return-data.html-n8xizhgx.js",revision:"06a99a1ec91f7f3ee9d33b93f3b59886"},{url:"assets/select-single-table.html-eKaAp2mv.js",revision:"9b34b1357a142bcd086ffa1f077d4794"},{url:"assets/select-single-table.html-jCn548rO.js",revision:"a7cb7aaa5440ebc5ea21b97e0613f3f8"},{url:"assets/select.html-07AlZXTj.js",revision:"e233b5c45e232e359f4a6bd1327d6eab"},{url:"assets/select.html-3qWkyB3w.js",revision:"ac9cfefd746336df73362dedc247ee53"},{url:"assets/service-support.html-MM1D0VM-.js",revision:"204def0d6191d6742675d52295c24275"},{url:"assets/service-support.html-sWJvxKgL.js",revision:"d3ce87f60b25d6ad0bc1010f7f1a7e7c"},{url:"assets/sharding.html-aqc9cqIi.js",revision:"c642ee0e97f92cc2fa3bde1c55ffd80a"},{url:"assets/sharding.html-S59HborN.js",revision:"002cdd5db3c6052db1fa5fc96abb1523"},{url:"assets/style-JZOs4U_2.css",revision:"2bff9ccde0361a41b4a0e0cbfd43ac5a"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/transaction.html-J4MX7jKK.js",revision:"dc7307c9826bcbd04d9ecf3526520920"},{url:"assets/transaction.html-xLc4CIlQ.js",revision:"cef8e78d7d1734de6575926e0e22fd79"},{url:"assets/type-mapping.html-dpeWFwAR.js",revision:"50ea49eaa8c9218f61550c58535f3d33"},{url:"assets/type-mapping.html-PgIMPnFZ.js",revision:"37bb008934112bb7cd7725bec34079cf"},{url:"assets/unionall.html-brrP1ilV.js",revision:"a3082ccc3b484850629c9bfad7edb876"},{url:"assets/unionall.html-Y_PxFgqx.js",revision:"dbcbfe1edb9bc96dfb4c74f1d41ffeb5"},{url:"assets/Unit-of-Work-Manager.html-CnmgO2Cu.js",revision:"76b1d2ac717eeee1c4c0f762a967b2b8"},{url:"assets/Unit-of-Work-Manager.html-cS666Fi6.js",revision:"373e4079dd3e5772c4104deb10999533"},{url:"assets/Unit-of-Work.html-72siDNU6.js",revision:"825a039701b745e233ebf0c74dc92a68"},{url:"assets/unit-of-work.html-A_n7J9nu.js",revision:"7a2be72d97e015147e9455801992b8f2"},{url:"assets/Unit-of-Work.html-pKFdLbWp.js",revision:"61fe6eccabd8dfb39d9194fdd000dcea"},{url:"assets/unit-of-work.html-uyz8b5OM.js",revision:"5c7d3e6b06fc3698a49f5649fe8756d3"},{url:"assets/unitofwork-manager.html-5fFisnFA.js",revision:"02da2dd0fb595febf2f4a3227ea30c12"},{url:"assets/unitofwork-manager.html-cQnFAzuE.js",revision:"3f1ffe3bb3c289a8634e36ea65362232"},{url:"assets/Update-Data.html-1N3G2Jro.js",revision:"18c11c0ae1ccb7d27abd7a8447243a05"},{url:"assets/Update-Data.html-XpbHf7Ih.js",revision:"9eadf38bc61404fc0d38182ca202d2a6"},{url:"assets/update.html-D_Gr4GpS.js",revision:"8090810bcfb6cc4b2d2c58a9f32644a7"},{url:"assets/update.html-zCNTLrk-.js",revision:"b786bd2d5b0bc1619c3fe184945975f8"},{url:"assets/vs-dapper.html-Qg8wI3K2.js",revision:"7c736ecdc2dd64d3021b11ca041489f5"},{url:"assets/vs-dapper.html-RtLf_ooD.js",revision:"9f56413a9c8f7b5f159ff3bc55cdd2c6"},{url:"assets/vs-entity-framework.html-0SRf7cVr.js",revision:"62e8cbaf94c2204b87788c7039311351"},{url:"assets/vs-entity-framework.html-BsPOn7hD.js",revision:"ce77e2df0fda1e0fc03c6f90bf4b0b71"},{url:"assets/With-Sql.html-GOOZgh9I.js",revision:"9698f5f271dcc0fa8cc3f11bd84aede8"},{url:"assets/With-Sql.html-mm2HqNKB.js",revision:"6736d4a77795d528d7fcc4432ae9def5"},{url:"assets/withsql.html-4wNvxK1v.js",revision:"a87c7a51d4e17df5888fef13ed3e4f74"},{url:"assets/withsql.html-YTmIBwgm.js",revision:"e35e8a90745d3b94d2038d028398b5af"},{url:"assets/withtempquery.html-fePJnGz7.js",revision:"f037e20a624ea27e2e93c5b1ae9b0c90"},{url:"assets/withtempquery.html-H5twUSsr.js",revision:"9b043c8eabc22d8185a4756ec34d673c"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"ce6562723ca5c1c298486cc58a5851f6"},{url:"404.html",revision:"03877e4e6d50263990e546de53eb483f"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
