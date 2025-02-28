            document.addEventListener('DOMContentLoaded', () => {
            // General Setting
            const getLoginBtn = document.querySelector('.btn.btn-masuk.fw-bold.p-0.px-2.submit');
            const getPromosiBtn = document.querySelector('.btn-promosi.fw-bold.desktop-only');
            
            const linkAlt1 = 'bit.ly/TaroslotVip';
            const linkAlt2 = 'sukadadar.org';
            const linkAlt3 = 'kamutaros.co';
            
            getLoginBtn.textContent = 'Login';
            getPromosiBtn.textContent = 'PROMO';
            
            // Withdraw & Deposit
            const getProvider = document.querySelector('.provider-group');
            const transWrap = document.createElement('div');
            transWrap.className = 'wrapper-transactions';
            
            const transWrapDp = document.createElement('div');
            transWrapDp.className = 'wrapper-transactions';
            
            const transContent = document.createElement('div');
            transContent.className = 'content-trans';
            
            const transContentDp = document.createElement('div');
            transContentDp.className = 'content-trans';
            
            const makeDp = document.createElement('div');
            makeDp.className = 'deposit-members';
            
            const makeWd = document.createElement('div');
            makeWd.className = 'withdraw-members';
            
            const titleDp = document.createElement('h3');
            titleDp.className = 'text-centertitle';
            titleDp.textContent = 'NEW DEPOSIT';
            
            const titleWd = document.createElement('h3');
            titleWd.className = 'text-centertitle';
            titleWd.textContent = 'NEW WITHDRAW';
            
            transContentDp.appendChild(makeDp);
            transContent.appendChild(makeWd);
            transWrapDp.appendChild(titleDp);
            transWrap.appendChild(titleWd);
            
            transWrapDp.appendChild(transContentDp);
            transWrap.appendChild(transContent); 
            
            const wrapAllTrans = document.createElement('div');
            wrapAllTrans.className = 'wrap-all-trans';
            
            wrapAllTrans.appendChild(transWrapDp);
            wrapAllTrans.appendChild(transWrap);
             
            getProvider.parentNode.insertBefore(wrapAllTrans, getProvider);
            
            function LinkAlternatif() {
                    $('<ul class="menu-alternatif"><li>Link alternatif :</li> <li data-alternatif="' + linkAlt1 + '">'+ linkAlt1 +'</li> <li data-alternatif="' + linkAlt2 + '">'+ linkAlt2 +'</li> <li data-alternatif="' + linkAlt3 + '">'+ linkAlt3 +'</li></ul>').insertBefore($('.wrap-all-trans'));
            
            $('.menu-alternatif li').click(function() {
            
            const targetLink = $(this).data('alternatif');
            
                    if(targetLink  !== undefined ) {
                            location.href = 'https://' + targetLink;
                    }
            
            });
            
            }
            
            function getDeposit() {
                    $.ajax({
                        url: 'https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json',
                        type: 'GET',
                        dataType: 'JSON',
                        success: function(response) {
                          const getUser = randomUser(response.slice(0, 50));
                            $.each(getUser, function(index, items){
                                 // IDR Value
                                const dana_wd = uangRupiahDp(10000, 50000);
            
            $('.deposit-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="favicon.png" class="avatar-trans" />'+ items.user +' | Deposit:</div> <span class="rupiah-trans">Rp.'+ dana_wd +'</span></div>');
            
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
                            $.each(getUser, function(index, items){
                                 // IDR Value
                                const dana_wd = uangRupiah(50000, 2000000);
                                $('.withdraw-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="favicon.png" class="avatar-trans" />'+ items.user +' | Withdraw:</div> <span class="rupiah-trans">Rp.'+ dana_wd +'</span></div>');
                               
                            });
                        }
                    })
                }
            
            function uangRupiah(min, max) {
                function getRandomRoundNumber(min, max) {
                    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                    const returnNum = Math.floor(randomNumber / 20000) * 20000;
                    if(returnNum != 0 || !isNaN(returnNum)) {
                      return returnNum;
                    }
                  }
                
                  const randomRoundNumber = getRandomRoundNumber(min, max);
                  const roundedNumber = randomRoundNumber;
                  return new Intl.NumberFormat().format(roundedNumber); 
              }
            
            function uangRupiahDp(min, max) {
                function getRandomRoundNumber(min, max) {
                    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                    const returnNum = Math.floor(randomNumber / 10000) * 10000;
                    if(returnNum != 0 || !isNaN(returnNum)) {
                      return returnNum; 
                    }
                  }
                
                  const randomRoundNumber = getRandomRoundNumber(min, max);
                  const roundedNumber = randomRoundNumber;
                  return new Intl.NumberFormat().format(roundedNumber);
              }
            
            function randomUser(array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;
                  
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
             
            getWithdraw();
            getDeposit();
            LinkAlternatif(); 
             
            }); 
