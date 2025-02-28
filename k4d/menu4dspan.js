document.addEventListener('DOMContentLoaded', () => {
    const menuRTP = 'https://rtpk4dpp.blogspot.com/';
    const memberUser = Math.floor(Math.random() * (1000 - 300 + 15000)) + 300;

    const sidebarMenu = document.querySelector('.nav.menu.sidebar-nav');
    if (sidebarMenu) sidebarMenu.remove();

    const newMenubar = `
    <ul class="new-menu">
        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="/rules-game"><i class="fa fa-gamepad"></i> Cara bermain</a></li>
        <li><a href="/history/number"><i class="fa fa-trophy"></i> History Nomor</a></li>
        <li><a href="/dream-book"><i class="fa fa-book"></i> Buku Mimpi</a></li>
        <li><a href="/referral"><i class="fa fa-users"></i> Refferal</a></li>
        <li><a href="/promotion"><i class="fa fa-usd"></i> Promosi</a></li>
        <li><a href="${menuRTP}" target="_blank"><i class="fa fa-percent"></i> RTP Slot</a></li>
        <li><a href="/forgot/password/"><i class="fa fa-lock"></i> Lupa Password</a></li>
    </ul>`;
    document.querySelector('.section.margin-top > .container').insertAdjacentHTML('afterbegin', newMenubar);

    const serviceHtml = `
    <div class="wrapper-service">
        <div class="item-service">
            <h1>Deposit</h1>
            <div class="status-wrapper">
                <p>Rata-Rata</p>
                <p><span class="count-item">01</span> Menit</p>
            </div>
            <div class="progress21 progress-moved2">
                <div class="progress-bar21"></div>
            </div>
        </div>
        <div class="item-service">
            <h1>Withdraw</h1>
            <div class="status-wrapper">
                <p>Rata-Rata</p>
                <p><span class="count-item">03</span> Menit</p>
            </div>
            <div class="progress31 progress-moved11">
                <div class="progress-bar31"></div>
            </div>
        </div>
        <div class="item-service">
            <h1>Member Online</h1>
            <div class="status-wrapper-mem">
                <p><span class="count-item">${memberUser}</span> Member</p>
            </div>
        </div>
        <div class="item-service">
            <p style="text-align: center;">Cari Kami di:</p>
            <div class="google-wrapper">
                <img src="https://iili.io/Hbz4Fwu.png" alt="google" />
                <p>KASIR4D</p>
            </div>
        </div>
    </div>`;
    document.querySelector("#slider").insertAdjacentHTML('afterend', serviceHtml);

    const transactionsHtml = `
    <div class="wrapper-transactions">
        <h3 class="text-centertitle">DEPOSIT</h3>
        <div id="lastdp">
            <div id="deposit-members"></div>
        </div>
        <hr class="divider-trans">
        <h3 class="text-centertitle">WITHDRAW</h3>
        <div id="lastwd">
            <div id="withdraw-members"></div>
        </div>
    </div>`;
    document.querySelector(".sidebar-button").insertAdjacentHTML('afterend', transactionsHtml);

    function uangRupiah(min, max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return new Intl.NumberFormat().format(Math.floor(randomNumber / 10000) * 10000);
    }

    function updateTransactions(url, selector) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const users = data.slice(0, 50).sort(() => Math.random() - 0.5);
                users.forEach(user => {
                    const dana = uangRupiah(10000, 200000);
                    document.querySelector(selector).innerHTML += `
                    <div class="item-trans">
                        <div class="avatar-wrapper">
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJifw0E54Mb92bYKiWcVJfvBNiW3bsHaTjxH67zZtM0EGCgwoutGXIN7pGP_oa-UfbQWBlRDNTpndkBJiirx24Lgi7QuiUW7T4sI7qbPNhcHKzUmkPNjLZyv6q2AOIvHIqWLbhwKs-D2wJiJ-AUSQBI2vwe7oZ0aJHa_6IQXz67OrYvK-u6dJmzV6o1g0/s44/b4c688399c01f0bd671b45403ba2c1ac.png" alt="avatar" class="avatar-trans" />${user.user} | ${selector.includes('deposit') ? 'Deposit' : 'Withdraw'}:
                        </div>
                        <span class="rupiah-trans">Rp.${dana}</span>
                    </div>`;
                });
                // Tampil elemen setelah data dimuat
                document.querySelector(selector).parentElement.style.visibility = 'visible';
            });
    }

    updateTransactions('https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json', '#deposit-members');
    updateTransactions('https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json', '#withdraw-members');

    document.querySelectorAll('a[href="https://cuekasir4d.com/"]').forEach(anchor => anchor.remove());

    // Tampil elemen setelah DOM dimuat
    document.querySelector('.new-menu').style.visibility = 'visible';
    document.querySelector('.wrapper-service').style.visibility = 'visible';
    document.querySelector('.wrapper-transactions').style.visibility = 'visible';
});
