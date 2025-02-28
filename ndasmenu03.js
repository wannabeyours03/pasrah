document.addEventListener('DOMContentLoaded', () => {

//Desktop General Setting

const menuRTP = 'https://bit.ly/slotgacorlt03';
const bannerDesktop = '#';
const fbLink = '#FB';
const igLink = "#IG";
const twitterLink = '#TWITTER';
const ytLink = '#YT';

const linkKeluhan = 'https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=lotto03.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMm1lbnVPcHRpb25zJTIyJTNBJTdCJTIyZW1haWxUcmFuc2NyaXB0JTIyJTNBdHJ1ZSU3RCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-us&title=Web%20Widget%20Live%20Chat/';
const linkPrediksi = 'https://singaemas.click/';
const linkBuktiJp = 'https://www.instagram.com/lotto03.official/';

const min = 300;
const max = 1000;
const memberUser = Math.floor(Math.random() * (max - min + 15000)) + min;





const sidebarMenu = document.querySelector('.nav.menu.sidebar-nav');

if (sidebarMenu) {
    sidebarMenu.remove();
}

const newMenubar = '<ul class="new-menu"> <li><a href="/"><i class="fa fa-home"></i> Home</a></li> <li><a href="/rules-game"><i class="fa fa-gamepad"></i> Cara bermain</a></li> <li><a href="/history/number"><i class="fa fa-trophy"></i> History Nomor</a></li> <li><a href="/dream-book"><i class="fa fa-book"></i> Buku Mimpi</a></li> <li><a href="/referral"><i class="fa fa-users"></i> Refferal</a></li> <li><a href="/promotion"><i class="fa fa-usd"></i> Promosi</a></li> <li><a href="https://bit.ly/slotgacorlt03" target="_blank"><i class="fa fa-percent"></i> RTP Slot</a></li> <li><a href="/forgot/password/"><i class="fa fa-lock"></i> Lupa Password</a></li> </ul>';


$('.section.margin-top > .container').prepend(function(index, oldHtml) {
    return newMenubar;
});

$('<div class="wrapper-service"><div class="item-service"><h1>Deposit</h1> <div class="status-wrapper"><p>Rata-Rata</p> <p><span class="count-item">01</span> Menit</p></div> <div class="progress21 progress-moved2"><div class="progress-bar21"></div> </div>  </div> <div class="item-service"><h1>Withdraw</h1> <div class="status-wrapper"><p>Rata-Rata</p> <p><span class="count-item">03</span> Menit</p></div> <div class="progress31 progress-moved11"><div class="progress-bar31"></div> </div> </div> <div class="item-service"><h1>Member Online</h1> <div class="status-wrapper-mem"> <p><span class="count-item">' + memberUser + '</span> Member</p></div>  </div> <div class="item-service"><p style="text-align: center;">Cari Kami di:</p> <div class="google-wrapper"> <img src="https://iili.io/Hbz4Fwu.png" />alt=<p>LOTTO03</p></div></div> </div>').insertAfter("#slider")


$('<div class="wrapper-transactions"> <h3 class="text-centertitle">DEPOSIT</h3> <div id="lastdp"><div id="deposit-members"></div></div> <hr class="divider-trans"> <h3 class="text-centertitle">WITHDRAW</h3> <div id="lastwd"><div id="withdraw-members"></div></div> </div>').insertAfter(".sidebar-button");

function uangRupiah(min, max) {
function getRandomRoundNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const returnNum = Math.floor(randomNumber / 10000) * 10000;
    if (returnNum !== 0 || !isNaN(returnNum)) {
        return returnNum;
    }
}

    const randomRoundNumber = getRandomRoundNumber(min, max);
    const roundedNumber = randomRoundNumber;
    return new Intl.NumberFormat().format(roundedNumber);
}

function getDeposit() {
    $.ajax({
        url: 'https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json',
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
            const getUser = randomUser(response.slice(0, 50));
            $.each(getUser, function(index, items) {
                // IDR Value
                const dana_wd = uangRupiah(10000, 200000);

                $('#deposit-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJifw0E54Mb92bYKiWcVJfvBNiW3bsHaTjxH67zZtM0EGCgwoutGXIN7pGP_oa-UfbQWBlRDNTpndkBJiirx24Lgi7QuiUW7T4sI7qbPNhcHKzUmkPNjLZyv6q2AOIvHIqWLbhwKs-D2wJiJ-AUSQBI2vwe7oZ0aJHa_6IQXz67OrYvK-u6dJmzV6o1g0/s44/b4c688399c01f0bd671b45403ba2c1ac.png" alt="lotto03" class="avatar-trans" />' + items.user + ' | Deposit:</div> <span class="rupiah-trans">Rp.' + dana_wd + '</span></div>');
            });
        }
    })
}

function getWithdraw() {
    $.ajax({
        url: 'https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json',
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
        const getUser = randomUser(response.slice(0, 50));
            $.each(getUser, function(index, items) {
                // IDR Value
                const dana_wd = uangRupiah(100000, 5000000);
                $('#withdraw-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJifw0E54Mb92bYKiWcVJfvBNiW3bsHaTjxH67zZtM0EGCgwoutGXIN7pGP_oa-UfbQWBlRDNTpndkBJiirx24Lgi7QuiUW7T4sI7qbPNhcHKzUmkPNjLZyv6q2AOIvHIqWLbhwKs-D2wJiJ-AUSQBI2vwe7oZ0aJHa_6IQXz67OrYvK-u6dJmzV6o1g0/s44/b4c688399c01f0bd671b45403ba2c1ac.png" alt="lotto03" class="avatar-trans" />' + items.user + ' | Withdraw:</div> <span class="rupiah-trans">Rp.' + dana_wd + '</span></div>');

            });
        }
    })
}

function randomUser(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

getDeposit();
getWithdraw();

});
document.addEventListener("DOMContentLoaded", function() {
    // $(`
    // <div class="three-banner">
    //     <div class="three-banner-item">
    //         <img src="" loading="lazy" alt="lotto03">
    //     </div>
    //     <div class="three-banner-item">
    //         <img src="" loading="lazy" alt="lotto03">
    //     </div>
    //     <div class="three-banner-item">
    //         <img src="" loading="lazy" alt="lotto03">
    //     </div>
    // </div>
    // `).insertAfter("#slider");
    $(`
    
    `).insertAfter("#slider");

    const anchors = document.querySelectorAll('a[href="https://www.totolotto03.com"]');
    anchors.forEach(anchor => {
    anchor.remove();
    });
}, false);
