import all from '../public/members.json'



function statsget() {
    if (window.location.pathname.includes("/apply.html")) return;
    if (window.location.pathname.includes('/team.html')) return;


}
statsget()


var headerdown = document.getElementById('drop') as HTMLInputElement;
var headerelement = document.getElementById("hdr")!;
if (window.location.pathname.includes("/team")) {
    headerdown.addEventListener('click', (_e) => {
        if (headerdown.checked == true) {


            setTimeout(() => {
                headerelement.style.opacity = "100";
            }, 10);
            headerelement.style.animation = "leftin 1s";
            headerelement.style.display = "flex";
        } else {
            headerelement.style.animation = "rightin 1s";
            //@ts-ignore
            setTimeout(() => {
                headerelement.style.opacity = "0";
            }, 200);
            setTimeout(function () {
                headerelement.style.display = "none";
            }, 500);
        }
    });
    window.addEventListener("load", () => {
        const membersData = (all)!;



        var contenar = document.getElementById("memeberCont") as HTMLElement;
        //@ts-ignore
        for (let i = 0; i < membersData.length; i++) {
            const Card = `<div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
            <a class="pf" href=${membersData[i]["instalink"]}>
             <div class="relative mb-5">
                <img src=${membersData[i]["img"]} alt="image" class="pfpimg w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-primary"/>
            </div>
            <h4 class="username text-xl text-white font-semibold text-center mb-2 transition-all duration-500 group-hover:text-primary">${membersData[i]["name"]}</h4>
            <span class="description text-gray-500 text-center block transition-all duration-500 group-hover:text-[#21ABAE]">${membersData[i]["description"]}</span>                  
            </a>
        </div>`;
            contenar.innerHTML += Card;
        }
    })


}

if (window.location.pathname.includes("/apply")) {
    const nextButton = document.getElementById("next")!;
    const choice = document.getElementById("appeal")!;
    const choose = document.querySelector('.choose') as HTMLElement;
    const ba = document.querySelector(".ba") as HTMLElement;
    const form = document.getElementById('teamform') as HTMLFormElement;
    const tymsg = document.getElementById('tymsg') as HTMLElement;
    const homebutton = document.getElementById('backbutton') as HTMLElement;
    nextButton.addEventListener('click', () => {



        //@ts-ignore
        if (choice.value === "cc") {
            const cc = document.querySelector(".cc") as HTMLElement;
            const inputs = cc.querySelectorAll('input');
            inputs.forEach(function (i) {
                i.setAttribute("required", "required");
            })
            choose.style.opacity = "0";
            choose.style.display = "none";
            setTimeout(() => {
                cc.style.opacity = "100";
            }, 50);
            //@ts-ignore
            cc.style.display = "flex";
            ba.style.display = "flex";
            ba.onclick = () => {
                choose.style.opacity = "100";
                choose.style.display = "flex";
                setTimeout(() => {
                    cc.style.opacity = "0";
                }, 50);
                //@ts-ignore
                cc.style.display = "none";
                ba.style.display = "none";
            }

        }  //@ts-ignore
        else if (choice.value == "esport") {
            var esp = document.querySelector('.esport') as HTMLElement;
            choose.style.opacity = "0";
            choose.style.display = "none";
            setTimeout(() => {
                esp.style.opacity = "100";
            }, 50);
            //@ts-ignore
            esp.style.display = "flex";
            ba.style.display = "flex";
            ba.onclick = () => {
                choose.style.opacity = "100";
                choose.style.display = "flex";
                setTimeout(() => {
                    esp.style.opacity = "0";
                }, 50);
                //@ts-ignore
                esp.style.display = "none";
                ba.style.display = "none";
            }
        } else {
            var tm = document.querySelector('.tm') as HTMLElement;
            choose.style.opacity = "0";
            choose.style.display = "none";
            setTimeout(() => {
                tm.style.opacity = "100";
            }, 50);
            //@ts-ignore
            tm.style.display = "flex";
            ba.style.display = "flex";
            ba.onclick = () => {
                choose.style.opacity = "100";
                choose.style.display = "flex";
                setTimeout(() => {
                    tm.style.opacity = "0";
                }, 50);
                //@ts-ignore
                tm.style.display = "none";
                ba.style.display = "none";
            }
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ccformData = {
            //@ts-ignore
            platform: document.getElementById('channel').value,
            //@ts-ignore
            instagram: document.getElementById('cci').value,
            //@ts-ignore
            youtube: document.getElementById('ccy').value,
            //@ts-ignore
            email: document.getElementById('cce').value
        };
        const esformData = {
            //@ts-ignore
            platform: document.getElementById('pp').value,
            //@ts-ignore
            instagram: document.getElementById('instagram').value,
            //@ts-ignore
            email: document.getElementById('email').value,
            //@ts-ignore
            game: document.getElementById('game').value
        };
        const tmformData = {
            //@ts-ignore
            platform: document.getElementById('mm').value,
            //@ts-ignore
            instagram: document.getElementById('tmi').value,
            //@ts-ignore
            discord: document.getElementById('tmd').value,
            //@ts-ignore
            email: document.getElementById('tme').value,
            //@ts-ignore
            link: document.getElementById('link').value
        };

        const sub = e.submitter as HTMLElement;
        const id = sub.getAttribute('id')
        if (id == "cc") {
            fetch('https://formspree.io/f/myzwjgyv', {
                method: 'POST',

                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ccformData)
            }).then(response => response.json())
                .then(() => {

                    form.style.display = 'none';
                    tymsg.style.display = 'flex';
                    homebutton.style.display = 'none';
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
                });

        } else if (id == 'esp') {
            fetch('https://formspree.io/f/mzzrgpbq', {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(esformData)
            }).then(response => response.json())
                .then(() => {

                    form.style.display = 'none';
                    tymsg.style.display = 'flex';
                    homebutton.style.display = 'none';
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
                });
        } else {
            fetch('https://formspree.io/f/meogkjqb', {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tmformData)
            }).then(response => response.json())
                .then(() => {

                    form.style.display = 'none';
                    tymsg.style.display = 'flex';
                    homebutton.style.display = 'none';
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
                });
        }

    })


}