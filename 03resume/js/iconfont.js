;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M594.656256 513.204224c-14.513152 0-29.108224 14.595072-29.108224 29.080576 0 14.733312 14.595072 29.135872 29.108224 29.135872 22.003712 0 36.40832-14.40256 36.40832-29.135872C631.064576 527.798272 616.660992 513.204224 594.656256 513.204224z"  ></path>' +
    '' +
    '<path d="M754.716672 513.204224c-14.404608 0-28.918784 14.595072-28.918784 29.080576 0 14.733312 14.514176 29.135872 28.918784 29.135872 21.8112 0 36.405248-14.40256 36.405248-29.135872C791.12192 527.798272 776.527872 513.204224 754.716672 513.204224z"  ></path>' +
    '' +
    '<path d="M296.35072 302.142464c-21.783552 0-43.813888 14.37696-43.813888 36.297728 0 21.810176 22.030336 36.406272 43.813888 36.406272 21.8112 0 36.296704-14.596096 36.296704-36.406272C332.648448 316.519424 318.16192 302.142464 296.35072 302.142464z"  ></path>' +
    '' +
    '<path d="M500.031488 374.846464c21.894144 0 36.407296-14.596096 36.407296-36.406272 0-21.920768-14.513152-36.297728-36.407296-36.297728-21.8112 0-43.731968 14.37696-43.731968 36.297728C456.29952 360.250368 478.220288 374.846464 500.031488 374.846464z"  ></path>' +
    '' +
    '<path d="M511.020032 3.207168c-281.525248 0-509.997056 228.36224-509.997056 509.996032 0 281.633792 228.471808 509.996032 509.997056 509.996032 281.549824 0 509.913088-228.363264 509.913088-509.996032C1020.93312 231.569408 792.57088 3.207168 511.020032 3.207168zM390.893568 673.455104c-36.325376 0-65.51552-7.407616-101.922816-14.596096l-101.732352 51.028992 29.0816-87.573504c-72.812544-50.893824-116.435968-116.544512-116.435968-196.438016 0-138.466304 131.03104-247.49568 291.008512-247.49568 143.05792 0 268.404736 87.08096 293.604352 204.338176-9.237504-1.038336-18.584576-1.69472-28.014592-1.69472-138.248192 0-247.386112 103.15264-247.386112 230.301696 0 21.129216 3.279872 41.520128 8.96512 60.980224C409.069568 673.014784 400.022528 673.455104 390.893568 673.455104zM820.122624 775.375872l21.919744 72.76032-79.809536-43.732992c-29.110272 7.297024-58.353664 14.59712-87.327744 14.59712-138.466304 0-247.494656-94.626816-247.494656-211.171328 0-116.355072 109.028352-211.171328 247.494656-211.171328 130.705408 0 247.168 94.816256 247.168 211.171328C922.072064 673.455104 878.559232 731.590656 820.122624 775.375872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M869.181601 179.473581 148.678305 179.473581c-46.001591 0-83.134838 37.131689-83.134838 83.131349L65.543466 761.394047c0 45.99966 37.133247 83.131349 83.134838 83.131349l720.503296 0c46.001591 0 83.134838-37.131689 83.134838-83.131349L952.316439 262.60493C952.316439 216.60527 915.183191 179.473581 869.181601 179.473581zM141.472903 788.827863l-20.229566-20.228717 228.621317-228.611721 20.229566 20.228717L141.472903 788.827863zM876.387002 788.827863 647.765685 560.216141l20.229566-20.228717 228.621317 228.611721L876.387002 788.827863zM536.641224 604.275613l0 18.565844-55.423567 0L481.217658 604.275613 120.96601 270.363637l35.194001-35.469839 352.769942 326.984193 352.769942-326.984193 35.194001 35.469839L536.641224 604.275613z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-llcouponsupportedshopaddress" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.006651 116.705002c44.556798 0 87.751576 8.706289 128.386042 25.876344 39.271422 16.593933 74.550926 40.36022 104.857163 70.638827 30.303166 30.274514 54.088896 65.516156 70.696132 104.743576 17.181311 40.584324 25.892717 83.72589 25.892717 128.22743 0 60.133565-16.352433 118.959346-47.295166 170.119539-1.840928 3.044336-3.358491 6.271844-4.529153 9.625218l-2.033309 2.111081c-1.853208 1.923816-3.551896 3.987824-5.081739 6.178723-3.257184 4.502547-22.943548 28.40391-139.785673 147.653875-55.362912 56.503898-109.00053 110.372783-122.329093 123.745349-0.034792 0-0.069585 0-0.106424 0-3.27458 0-6.54302 0.315178-9.757225 0.939395-13.654998-13.286608-68.817342-67.040882-125.855406-123.673717C264.828063 663.513786 244.41822 638.84699 241.021867 634.116245c-1.658779-2.376117-3.515057-4.606925-5.550413-6.668886l-1.614777-1.638313c-1.174756-3.412726-2.707668-6.693446-4.575202-9.7869-30.828123-51.090609-47.124274-109.816105-47.124274-169.830967 0-44.50154 8.711406-87.643106 25.892717-128.22743 16.607236-39.22742 40.392966-74.468039 70.697155-104.743576 30.30726-30.278607 65.587787-54.044894 104.861256-70.638827C424.246889 125.410268 467.44576 116.705002 512.006651 116.705002M511.968789 587.729775c78.135568 0 141.706419-63.475683 141.706419-141.499711 0-78.017888-63.567781-141.490501-141.706419-141.490501-78.141708 0-141.714605 63.47159-141.714605 141.490501C370.25316 524.254092 433.826058 587.729775 511.968789 587.729775M512.006651 65.539692c-210.435757 0-381.012713 170.406065-381.012713 380.651486 0 71.802326 19.899212 138.956795 54.481845 196.266036 1.886977 6.696516 5.536087 13.025665 10.972912 18.288528l2.610454 2.644223c24.922622 35.778878 279.417851 282.991236 279.417851 282.991236 8.326643 8.05342 19.243273 12.079106 30.159904 12.079106 4.059456 0 8.118911-0.556679 12.045337-1.670036 1.283226 0.11768 2.574638 0.178055 3.860934 0.178055 10.605545 0 21.211091-4.01136 29.30749-12.040221 0 0 247.936859-248.334925 270.985808-281.388738l2.967588-3.083222c5.14109-5.098111 8.643867-11.20111 10.520611-17.670451 34.704406-57.380872 54.680367-124.656091 54.680367-196.596564C893.002992 235.945757 722.426035 65.539692 512.006651 65.539692L512.006651 65.539692zM511.968789 536.564465c-50.008974 0-90.549296-40.443108-90.549296-90.334401 0-49.880037 40.540322-90.325192 90.549296-90.325192s90.541109 40.444131 90.541109 90.325192C602.507852 496.121358 561.977763 536.564465 511.968789 536.564465L511.968789 536.564465z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianjie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M943.213046 186.976462c-16.060791-35.175127-39.406498-59.271942-40.392966-60.280922l-1.150196-1.108241c-57.288774-51.959396-112.00905-56.981782-147.824767-52.045353-38.659485 5.328355-63.573921 22.942525-66.287729 24.933879l-1.600451 1.174756L451.537953 332.462974c0 0-13.366426 16.179494 5.786797 34.267455 13.685697 12.925381 31.703049 3.480264 31.703049 3.480264L720.268394 140.553153c10.343579-6.609535 72.445986-41.376363 144.962579 23.810289 5.826705 6.237051 64.472384 71.447239 28.672016 129.444141L620.179838 566.019311c-9.43079 4.881171-43.482327 20.600177-71.717392 9.324366-19.129686-7.638981-33.435507-27.514657-42.521442-59.069327 0 0-12.67774-20.663622-31.590486-15.299451-25.63689 7.270591-19.533892 30.019711-19.533892 30.019711 13.924127 48.360428 38.930661 79.9591 74.326822 93.920066 13.784958 5.436826 27.750017 7.516184 41.064254 7.516184 42.190915-0.00307 77.766155-20.898982 79.710436-22.062482l2.794649-1.672082L935.427732 327.542918l1.505283-2.28095C963.77843 284.588617 965.948863 236.770542 943.213046 186.976462z"  ></path>' +
    '' +
    '<path d="M564.913117 654.683676c-13.693884-12.917194-31.705096-3.461845-31.705096-3.461845l-231.105518 229.79364c-10.339486 6.615675-72.421426 41.418318-144.976906-23.725354-5.829775-6.232958-64.514339-71.409376-28.747741-129.426745l273.562493-272.372388c9.42772-4.88731 43.470047-20.62576 71.711252-9.367345 19.133779 7.627724 33.45188 27.494191 42.556235 59.044768 0 0 12.69002 20.655436 31.599695 15.281031 25.632797-7.28594 19.516496-30.030967 19.516496-30.030967-13.95278-48.352241-38.978756-79.936587-74.382081-93.877087-13.788028-5.428639-27.754111-7.499811-41.068348-7.491625-42.190915 0.027629-77.753875 20.945031-79.698157 22.10853l-2.793626 1.673106L86.832647 694.15362l-1.50426 2.281973c-26.820855 40.688701-28.963659 88.5078-6.198166 138.288576 16.08228 35.165918 39.441291 59.249429 40.427758 60.257385l1.151219 1.108241c57.319473 51.925626 112.042819 56.915267 147.854443 51.958372 38.656415-5.350868 63.560618-22.980387 66.273403-24.972764l1.599428-1.175779 234.281861-232.951563C570.72038 688.948061 584.076572 672.761404 564.913117 654.683676z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1276 1024">' +
    '' +
    '<path d="M942.175011 498.453245c-49.484783-9.667138-25.438173-36.496873-25.438173-36.496873s48.420028-80.404867-9.582801-138.861007c-71.876279-72.392844-246.559462 9.213826-246.559462 9.213826-66.710633 20.862886-49.031472-9.519548-39.596261-61.207638 0-60.901916-20.704754-163.982916-198.424072-103.102084-177.550644 61.21818-329.97938 275.67684-329.97938 275.67684C-13.416851 586.195438 0.614731 696.339669 0.614731 696.339669c26.481844 243.154353 282.940372 309.896612 482.408115 325.709815 209.862289 16.582779 493.09784-72.877782 578.99516-256.658828C1147.894241 581.293345 991.828468 508.436647 942.175011 498.453245zM498.561954 953.472893c-208.323137 9.804186-376.744292-95.437952-376.744292-235.500762 0-140.210401 168.421155-252.652817 376.744292-262.330497 208.470727-9.667138 377.218688 76.852167 377.218688 216.77793C875.780642 812.471832 707.032681 943.942802 498.561954 953.472893z"  ></path>' +
    '' +
    '<path d="M457.004856 548.001282c-209.535483 24.700223-185.320198 222.428514-185.320198 222.428514s-2.150596 62.609742 56.179039 94.510244c122.605035 66.900391 248.836564 26.386965 312.637567-56.569098C704.302268 725.351625 666.846061 523.469733 457.004856 548.001282zM404.146589 825.522996c-39.121864 4.617455-70.642849-18.100846-70.642849-51.087188 0-32.817667 27.999912-67.206113 67.14286-71.317546 44.941123-4.311733 74.185007 21.76951 74.185007 54.755851C474.842149 790.702322 443.120864 821.05313 404.146589 825.522996zM527.66879 719.511282c-13.251464 9.97286-29.560148 8.59184-36.560126-3.362941-7.295158-11.659602-4.564745-30.371892 8.834309-40.197162 15.539108-11.638517 31.668575-8.296661 38.668553 3.384025C545.632588 691.279444 540.614532 709.222158 527.66879 719.511282z"  ></path>' +
    '' +
    '<path d="M1044.201797 412.851106c16.888501 0 31.246889-12.58731 33.650496-29.001414 0.305722-1.222888 0.453312-2.298186 0.453312-3.679205 25.596305-231.800473-188.535549-191.909033-188.535549-191.909033-19.00747 0-34.251398 15.496939-34.251398 34.820673 0 19.018012 15.243928 34.514951 34.251398 34.514951 153.809755-34.209229 119.864079 120.739077 119.864079 120.739077C1009.634135 397.501757 1025.131074 412.851106 1044.201797 412.851106z"  ></path>' +
    '' +
    '<path d="M1019.248562 8.254492C945.211146-9.213826 869.075844 5.840343 847.738562 9.962318c-1.644573 0.14759-3.194267 1.718368-4.712335 2.02409-0.737949 0.158132-1.191261 0.917166-1.191261 0.917166C820.803406 18.902049 805.42243 38.510421 805.42243 61.692576c0 27.620395 22.212279 50.328154 49.938095 50.328154 0 0 26.95624-3.637037 45.225761-10.837315 18.121931-7.35841 171.467832-5.48191 247.613676 123.37461 41.557098 94.035848 18.269521 156.972396 15.370433 167.092846 0 0-9.888523 24.43667-9.888523 48.493823 0 27.778527 22.243906 45.225761 49.779963 45.225761 23.024024 0 42.3583-3.162641 48.008885-42.389926l0.29518 0C1333.541245 168.410613 1151.710494 39.39596 1019.248562 8.254492z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.974 15.759C229.233 15.759 0.007 243.57 0.007 524.59c0 224.8 146.666 415.512 350.136 482.754 25.628 4.711 34.95-10.96 34.95-24.484 0-12.057-0.45-44.031-0.67-86.54-142.426 30.776-172.48-68.219-172.48-68.219-23.285-58.771-56.852-74.403-56.852-74.403-46.487-31.547 3.531-30.931 3.531-30.931 51.379 3.613 78.423 52.414 78.423 52.414 45.66 77.76 119.846 55.257 149.005 42.312 4.632-32.941 17.891-55.315 32.5-68.063-113.673-12.834-233.188-56.485-233.188-251.45 0-55.567 19.938-100.992 52.684-136.569-5.239-12.81-22.843-64.543 5.026-134.628 0 0 42.982-13.667 140.811 52.2 40.816-11.334 84.622-16.997 128.166-17.17 43.483 0.187 87.302 5.836 128.173 17.17 97.76-65.867 140.68-52.2 140.68-52.2 27.938 70.085 10.34 121.819 5.096 134.628 32.813 35.576 52.613 81.002 52.613 136.569 0 195.419-119.688 238.473-233.746 251.021 18.354 15.723 34.736 46.839 34.736 94.317 0 67.98-0.613 122.837-0.613 139.531 0 13.627 9.203 29.479 35.195 24.435 203.246-67.386 349.811-257.956 349.811-482.692C1023.994 243.57 794.762 15.759 511.974 15.759z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xueli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M502.213611 635.097596c-9.69378 0-19.166525-2.068102-25.326828-5.5279L53.409932 391.982556c-5.940292-3.338025-9.621125-9.619078-9.621125-16.437367 0-6.815219 3.681856-13.105482 9.621125-16.437367l423.524946-237.586117c12.099572-6.859221 38.334073-6.90834 50.630121 0.061398l423.414429 237.524718c5.940292 3.331885 9.621125 9.621125 9.621125 16.437367 0 6.817266-3.681856 13.099343-9.621125 16.437367L527.492344 629.587092C521.38116 633.035634 511.907391 635.097596 502.213611 635.097596zM495.343133 596.702124c0.195451 0 2.944052 0.699941 6.871501 0.699941 4.072759 0 6.797823-0.741897 7.509021-1.030469L903.246287 375.546212 509.061576 154.420999l0 0c-0.171915 0-2.921539-0.705058-6.846942-0.705058-4.099365 0-6.79987 0.735757-7.511067 1.02433L101.156376 375.546212 495.343133 596.702124 495.343133 596.702124zM502.336408 907.631666c-84.041068 0-162.759921-13.020548-221.659379-36.678364-50.677193-20.35663-81.084737-46.934962-81.317027-71.108524 0-0.833995-0.062422-1.632173-0.159636-2.405793l-0.159636-2.40477L199.04073 450.520787l37.696554 0 0 343.42156c0.157589 1.483794 0.257873 2.980891 0.293689 4.491291 1.939165 4.307096 15.754822 20.700461 57.697073 37.536918 54.530964 21.902846 128.267339 33.965579 207.609385 33.965579 79.368652 0 153.090701-12.062733 207.597105-33.965579 42.089607-16.897855 55.856146-33.340339 57.697073-37.561477l0.073678-1.681292-0.050142-346.18858 37.696554 0 0 347.404268-18.897396 1.730411 18.847254 0.184195c-0.243547 24.173562-30.651091 50.751894-81.329307 71.096245C665.119865 894.612141 586.390779 907.631666 502.336408 907.631666zM980.21017 467.890386M936.428014 807.281143c-10.407024 0-18.8493-8.429996-18.8493-18.847254L917.578714 496.671896c0-10.413164 8.442276-18.848277 18.8493-18.848277s18.8493 8.435113 18.8493 18.848277l0 291.761993C955.277314 798.850124 946.835038 807.281143 936.428014 807.281143z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nianling" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.697762 201.834659c-17.683507-11.841909-42.990276-26.223198-62.260896-36.314163-21.426022-11.248021-42.043128-24.482493-63.146607-36.657184-42.078966-24.298184-83.789312-47.587783-125.003045-72.147072-20.617106-12.297564-42.155761-23.238402-62.557839-36.027458C572.970727 8.944148 542.825825 0 512.614366 0l-6.159021 0c-26.320472 0-60.509952 11.483528-76.667783 21.907275-20.192169 13.034803-41.807621 23.509747-62.322332 36.252726-40.578888 25.173655-83.517967 47.746494-125.105439 72.044678-20.012979 11.683197-43.927184 23.81693-62.445206 36.114494-19.541965 12.973366-42.401508 22.982416-62.337691 36.252726C85.148597 224.136153 46.853103 275.947703 46.853103 328.993105l0 365.957472c0 53.316748 38.305733 104.442256 70.974656 126.17546 38.152142 25.383564 84.219368 49.067381 124.53715 72.612966 41.597712 24.298184 84.54191 46.850543 125.105439 72.049797 20.489113 12.717381 41.930494 23.694057 62.557839 36.017219 18.087965 10.802606 47.598022 22.142782 76.432276 22.142782l13.557014 0c46.635515 0 105.415002-39.258001 137.27501-58.651494 41.055022-24.989346 82.714171-47.229402 124.352841-71.553185 39.81093-23.264 86.354291-47.132128 123.799911-72.121473 31.81393-21.241712 71.711896-72.577128 71.711896-124.204369L977.157136 326.530521C977.146897 274.160921 936.957107 223.434751 904.697762 201.834659zM875.039233 797.954193c-34.440346 22.992655-77.241192 44.935769-113.847178 66.325952-38.290374 22.36293-76.596107 42.821325-114.36939 65.798621-29.295029 17.82686-83.338776 53.936234-126.236897 53.936234l-12.466514 0c-26.504782 0-53.63929-10.433986-70.278375-20.36624-18.963437-11.324817-38.684592-21.415782-57.530276-33.119458-37.302268-23.171846-76.785537-43.901585-115.050312-66.249156-37.071881-21.661529-79.45291-43.440811-114.517862-66.776487-30.032268-19.99762-65.27129-67.001755-65.27129-116.033298L85.471139 344.941028c0-48.785797 35.213423-96.435016 65.035783-116.263685 18.338831-12.195169 39.355275-21.405543 57.325487-33.324247 17.038423-11.314578 39.032733-22.475564 57.427881-33.221853 38.249416-22.342451 77.732685-43.102909 115.050312-66.249156 18.871282-11.713916 38.73579-21.349226 57.310128-33.339606 14.852303-9.584113 46.292494-20.151212 70.498523-20.151212l5.667528 0c27.784712 0 55.502867 8.227387 72.751199 19.040233 18.753529 11.744634 38.566839 21.81512 57.530276 33.119458 37.896156 22.593317 76.247966 44.009099 114.947918 66.341311 19.413972 11.212183 38.377409 23.376634 58.072966 33.713346 17.719345 9.287169 40.998705 22.501162 57.258931 33.390804 29.653409 19.864507 66.622896 66.520501 66.622896 114.671453l0 341.065401 0 0C940.981206 731.223783 904.283064 778.422467 875.039233 797.954193z"  ></path>' +
    '' +
    '<path d="M526.656194 570.599617 526.656194 570.599617 526.656194 570.599617c0.439976-22.293774 0 161.231132 0 161.231132l-29.314388 0L497.341806 585.256811c0-60.080696-49.483278-102.601357-102.601357-102.601357l-73.286969 0c0 59.464729 63.495508 103.055332 102.601357 102.601357 0 0 23.554704 0 43.971582 0l0 29.314388-42.418667 0c-67.204304 0-125.789082-52.473114-133.469659-117.258551l0 0c0 0 0-37.126958 0-43.971582l101.8244 0C461.503777 453.341066 519.166606 505.228212 526.656194 570.599617L526.656194 570.599617zM497.795781 409.369485 497.795781 409.369485 497.795781 409.369485c-0.439976-22.322772-0.453975 58.614776-0.453975 58.614776l29.314388 29.329387 0.395978-73.286969c0-60.080696 49.380284-102.601357 102.396368-102.601357l73.139977 0c0 59.479729-63.378514 103.055332-102.396368 102.601357 0 0-23.510707 0-43.883586 0l0 29.314388 42.330672 0c67.072311 0 125.540095-52.459115 133.220673-117.258551l0 0c0 0 0-37.126958 0-43.971582l-101.63441 0C562.815205 292.110934 505.27137 343.99708 497.795781 409.369485L497.795781 409.369485z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-boke" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M260.812609 594.761935c20.509103-17.712407 30.763654-40.86164 30.763654-69.450768 0-22.992667-6.758937-41.677215-20.275789-56.04955-13.516852-14.369266-31.54239-22.874987-54.06843-25.51921l0-0.932232c18.021445-5.903453 32.161491-15.847943 42.416042-29.830399 10.254551-13.983479 15.382339-30.450523 15.382339-49.408293 0-22.682605-8.469905-41.09393-25.403576-55.233975-16.936741-14.135952-39.85266-21.208021-68.750827-21.208021L85.788363 287.129486l0 334.200548 97.416703 0C214.434326 621.330034 240.303506 612.474342 260.812609 594.761935zM124.941082 322.553277l44.980447 0c42.72508 0 64.089667 16.237823 64.089667 48.708352 0 18.801205-6.139837 33.366945-18.411325 43.698245-12.275581 10.334369-29.131481 15.498996-50.572816 15.498996l-40.085974 0L124.941082 322.553277zM124.941082 465.649346l44.980447 0c53.755298 0 80.636528 19.733437 80.636528 59.196217 0 18.956747-6.332219 33.873482-18.99461 44.747133-12.664438 10.876722-30.493501 16.313547-53.486168 16.313547l-53.136198 0L124.941082 465.649346zM354.268094 286.438755l38.220487 0 0 334.89128-38.220487 0 0-334.89128ZM656.189472 587.43097c21.518083-22.915919 32.278147-53.405327 32.278147-91.474364 0-38.839587-9.984399-69.217455-29.947056-91.124394-19.966751-21.906939-47.740304-32.860409-83.317591-32.860409-37.288255 0-66.886363 11.266601-88.793302 33.792641-21.906939 22.530133-32.860409 53.835116-32.860409 93.92109 0 36.82265 10.523681 66.384943 31.578206 88.677669 21.051455 22.296819 49.211818 33.443693 84.483136 33.443693C605.810061 621.806895 634.669342 610.349959 656.189472 587.43097zM492.70198 498.287697c0-29.364795 7.143701-52.397371 21.440311-69.100798 14.293541-16.700357 33.712823-25.053606 58.263985-25.053606 24.704658 0 43.698245 8.080026 56.982806 24.238031 13.283538 16.161075 19.926842 39.152718 19.926842 68.984141 0 29.521361-6.642281 52.283784-19.926842 68.285223-13.283538 16.004509-32.278147 24.004717-56.982806 24.004717-24.238031 0-43.580564-8.157797-58.030671-24.471344C499.926522 548.861536 492.70198 526.566764 492.70198 498.287697zM953.218422 597.10326 953.218422 377.565195l-38.22151 0 0 33.093722-0.931209 0c-15.538905-25.789363-39.386032-38.687114-71.548546-38.687114-33.873482 0-60.558238 11.965519-80.053244 35.890418-19.501146 23.927969-29.249161 56.166207-29.249161 96.717785 0 35.737946 9.05012 64.206324 27.151383 85.415368 18.098193 21.208021 41.98523 31.81152 71.66418 31.81152 36.509519 0 63.856353-15.22475 82.035388-45.679365l0.931209 0 0 26.102495c0 24.480554-4.532223 44.140313-13.553691 59.026348l-19.323091 20.441565c-0.276293 0.187265-0.546446 0.379647-0.825808 0.562818-6.04467 3.734044-48.823985 27.699875-110.058628-0.473791-66.173119-30.446429-160.317289-32.940227-183.51257 46.759977l27.288506 21.030989c0 0 0-37.520545 42.296315-52.529377 31.41857-11.148921 65.62258 2.943029 92.685959 14.557554l0 0.160659c7.767917 3.939729 16.008602 7.169283 24.701588 9.721409 0.143263 0.046049 0.288572 0.094144 0.430812 0.13917 1.215688 0.381693 2.52552 0.73678 3.90903 1.066285 14.81645 3.891633 30.921243 5.854335 48.331775 5.854335C911.269008 728.545918 953.218422 684.73204 953.218422 597.10326zM894.83778 566.806233c-13.440104 15.228843-30.879288 22.839171-52.320623 22.839171-21.131273 0-38.10383-7.960299-50.922786-23.889083-12.81691-15.924691-19.2269-37.171598-19.2269-63.74072 0-30.916127 6.678096-54.960753 20.042475-72.129784 13.361309-17.165961 31.848359-25.752524 55.467289-25.752524 19.111267 0 35.074843 6.757914 47.892777 20.275789 12.817933 13.516852 19.2269 29.754674 19.2269 48.708352l0 35.1915C914.996912 532.080338 908.275837 551.581484 894.83778 566.806233z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuangtai" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1020.032 449.088c-16.64-135.68-85.376-256.704-193.472-340.736-108.096-84.096-242.624-121.216-378.816-104.384C308.928 20.992 185.408 92.416 101.76 202.048L91.2 115.968c-1.408-11.712-12.096-20.032-23.872-18.56C55.488 98.816 47.232 109.504 48.64 121.216l18.496 150.272C67.008 272.896 66.624 274.176 66.816 275.648 68.224 287.36 78.912 295.68 90.688 294.208l153.344-18.88c1.024-0.128 1.984-0.32 2.944-0.576C257.152 272.064 264 262.208 262.72 251.52 261.248 239.808 250.56 231.488 238.848 232.96l-111.36 17.664C203.008 140.8 320.32 68.672 453.632 52.288c123.2-15.168 244.928 18.432 342.72 94.464 97.792 76.096 160 185.6 175.04 308.288 31.168 253.44-150.464 484.928-404.864 516.352-254.4 31.296-486.72-149.44-517.824-402.88C47.296 556.992 30.72 549.248 18.944 550.72 7.168 552.192-1.152 562.816 0.256 574.528c34.368 280.128 291.136 479.808 572.288 445.248 24.128-3.008 47.744-7.616 70.656-13.696C886.464 940.992 1051.52 705.088 1020.032 449.088L1020.032 449.088zM554.624 283.52c0-14.848-11.456-26.88-25.536-26.88-14.144 0-25.536 12.032-25.536 26.88l0 280.768L314.24 630.784c-12.8 6.272-18.304 22.272-12.288 35.712 5.952 13.44 21.184 19.2 33.984 12.928l203.52-71.552c9.728-4.8 15.168-15.168 14.592-25.792 0.128-1.088 0.576-1.984 0.576-3.072L554.624 283.52 554.624 283.52zM554.624 283.52"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)