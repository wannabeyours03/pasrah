    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function buatistri(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function buatanak(length) {
        var result = '';
        var characters = 'aeiou';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function buatjanda(length) {
        var result = '';
        var characters = 'bcdfghjklmnpqrstvwxyz1234567890';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    function dibuat(length) {
        var result = '';
        var characters = '****';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    setInterval(function () {
        var y = ["IDR 500.000", "IDR 850.000", "IDR 700.000", "IDR 900.000", "IDR 1.000.000", "IDR 1.250.000", "IDR 1.780.000", "IDR 200.000", "IDR 250.000", "IDR 1.810.000", "IDR 2.000.000", "IDR 2.100.000", "IDR 2.150.000", "IDR 2.250.000", "IDR 2.500.000", "IDR 2.205.000", "IDR 2.800.000", "IDR 2.900.000", "IDR 3.200.000", "IDR 810.000", "IDR 250.000", "IDR 8.770.000", "IDR 3.700.000", "IDR 3.900.000", "IDR 4.000.000", "IDR 5.170.000", "IDR 4.500.000", "IDR 4.750.000", "IDR 125.000", "IDR 150.000", "IDR 5.000.000", "IDR 5.120.000", "IDR 5.250.000", "IDR 5.500.000", "IDR 7.085.000", "IDR 7.800.000", "IDR 350.000", "IDR 325.000", "IDR 9.800.000", "IDR 10.000.000", "IDR 12.200.000", "IDR 12.500.000", "IDR 15.000.000", "IDR 690.000", "IDR 125.000", "IDR 24.800.000", "IDR 31.000.000", "IDR 30.200.000"];
        var d = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguSlnswEUZ47QhI0rpzcorWlEE0AX0sxh37BAwlERQn_VOVyHR1HtKRaok_Oe_6HY7l7n8J9nmxPvHBUGRDsRfug9X8SXqPnwSNp3e-s5s_CMhVK8u3JrVxguNgU3N-hWTkFDk5bg2FSRBUwX6nqNM7XJPX8Yep1IPI_TPII6sLeMvfs35zJ0SlYUhuA0/s300/BCA.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfN9y7aEE06uu3eiFOw-0xMK50tYwFdDsKmy4m5zgNKLkbiqEtmC76eeAfe16UzJ8X0nqT8jD9yXT4H9QDS4AGSIrAsxcoHmUx0chsDc6aD8eXOlAh24MLD8Gu9EqwLUFAzUxN6-rEghhXTCenTW5sEJbfasmYN_atCynqEqntKui1nKGv_NYSxPZrAR8/s300/MANDIRI.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTBEiQlMNQerJ9ncVXwXnl-M91_2_KfVkwzvPfOtiWmx0jonyATwY6W_fwsg_Nt6JL9CqCeEazya57WIVnE5AfuRW1wuHcP4q8VpDTG9zcmYGzxtnMp4LcyIpkQjdFrsNgkzNbDwvMusr04BQ4uaXeol0pBwI_JOPjSn55_QCLA7JeZ8XM3ZY1-KGRYf4/s300/BNI.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE-Ej3lM22ecXtjgTfH6j_BSuerroEUNOg9c6tPu4g_9B5VDrGjrwyNj4HbdMHh3LnfPAYodRm6ANMWARJ5Pev-eb9-4f_xocEiHWvBOWRiNXZzYxCtOBEh_T7yDA1wooOEszDK9yW6IztFIHQk5PhSzIiMegVB_jEviEDuMMBq4cR-xT8OlYOJijydtE/s300/BRI.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYC_poGJjYe4u3eJqgv-Cb72QXdC_y0Vd7A_s4_ntTcdn1y294tILlcgjYViunwkO8mQxBkXDLo-0iR4jj6aKCVEZisWrJdg4DEBvsVVCWoZpfnBnwNEr_-QddCv_SWZZgq8Vj5ab2AiUhGgajHkQVIXbXvdaSR6mWFzgr_f64khPGu-ZiYwHTAcUFsgk/s300/DANA.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhioztFAfNZZVAIFHYCXu51x0oY_E7o28MkeBMSA27svDW8AWWypW1IXc1PKJNtFouCi7UGV9PjgVR5qN8gRs3hmywy_ANgaF97tPjcs8OgZexxEPmXx76E_qcMwkc_BagYUQhvQKjAkl5BIkftvbnrLphUBOCD1ILynNhop271PE9gf4E-COh1qqGFqzw/s300/OVO.png", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHUiLllS9J2Eu1LTtGT1fhZQgFijs9AvmYLthyphenhyphenLAzfDQz96gBvAcbB5laKDDaijsd6gnLw4BKxfkVI0bWIPLdPTlugOBpMabmeSyntDPCE0VUOM47IdK1D_WR7TnxFKi0gv1_F0AfNXxwQUYIAp1UlVvm1iAcEzI5yWngViBy87K6Q4cZ04OccjakNU6I/s300/GOPAY.png"];
        for (let i = 1; i <= 300; i++) {
            var yy = getRandomInt(1, 48);
            var dd = getRandomInt(1, 7);
            var xx = y[yy];
            var ee = d[dd];
            var z = getRandomInt(3, 6);
            var user = buatistri(1) + buatanak(1) + dibuat(z) + buatjanda(1);
            document.getElementById("winner-info").innerHTML = user + " Telah Melakukan WD Sebesar " + xx;
            document.getElementById("imageid").src = ee;
        }
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }, 3000)
