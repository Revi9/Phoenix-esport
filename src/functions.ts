import all from '../public/members.json'
//@ts-expect-error
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { Buffer } from 'buffer/';
import {
    Carousel,
    initTWE,
} from "tw-elements";

initTWE({ Carousel });
const octokit = new Octokit({
    auth: import.meta.env.GITKEY, // Token with repo access
});

function HomePageStuff() {
    if (window.location.pathname.includes("/news")) return;
    if (window.location.pathname.includes("/apply")) return;
    if (window.location.pathname.includes("/team")) return;
    if (window.location.pathname.includes("/about")) return;

    const btnPC = document.getElementById('btnPC')!;
    const btnMobile = document.getElementById('btnMobile')!;
    const pcItems = document.getElementById('pcItems')!;
    const mobileItems = document.getElementById('mobileItems')!;

    btnPC.addEventListener('click', () => {
        setTimeout(() => {
            pcItems.style.opacity = "100";
        }, 50);

        pcItems.classList.remove('hidden');
        mobileItems.classList.add('hidden');
        mobileItems.style.opacity = "0.0001";
        btnPC.classList.add('text-primary');
        btnPC.classList.remove('text-secondary');
        btnMobile.classList.add('text-secondary');
        btnMobile.classList.remove('text-primary');
    });

    btnMobile.addEventListener('click', () => {
        setTimeout(() => {
            mobileItems.style.opacity = "100";
        }, 50);

        mobileItems.classList.remove('hidden');
        pcItems.classList.add('hidden');
        pcItems.style.opacity = "0.0001";
        btnMobile.classList.add('text-primary');
        btnMobile.classList.remove('text-secondary');
        btnPC.classList.add('text-secondary');
        btnPC.classList.remove('text-primary');
    });

    // Initialize default view to PC items visible
    btnPC.click();
}
HomePageStuff()
if (window.location.pathname.includes("/news")) {

    const cardHolder = document.getElementById("holder")!;
    const { data } = await octokit.repos.getContent({
        owner: 'Revi9',
        repo: 'Phoenix-esport',
        path: 'contents/news.json',
        ref: 'main',
    });


    const jsonStr = Buffer.from(data.content, 'base64').toString('utf-8');
    const json = JSON.parse(jsonStr);






    for (let i = 0; i < json.length; i++) {
        const Card = `<div class="max-w-sm   hover:border-primary hover:shadow-2xl transform transition duration-300 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#3954543b] dark:border-[#3954547f]">
               
            <img class="rounded-t-lg" src="${json[i]["ImgLink"]}" alt="${json[i]["headline"]}" />
          
            <div class="p-5">
         
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${json[i]["headline"]}</h5>
             
               <p class=" font-normal text-gray-700 dark:text-gray-400">${json[i]["pharagraph"]}</p>
                
            </div>
         </div>`;
        cardHolder.innerHTML += Card;
    }


}

if (window.location.pathname.includes("/about")) {
    var headerdown = document.getElementById('drop') as HTMLInputElement;
    var headerelement = document.getElementById("hdr")!;
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
}

if (window.location.pathname.includes("/team")) {
    var headerdown = document.getElementById('drop') as HTMLInputElement;
    var headerelement = document.getElementById("hdr")!;
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
        var ccContenar = document.getElementById("ccCont") as HTMLElement;
        var ptContenar = document.getElementById("ptCont") as HTMLElement;
        const btnCC = document.getElementById('btnCC')!;
        const btnPT = document.getElementById('btnPT')!;
        btnCC.addEventListener('click', () => {
            setTimeout(() => {
                ccContenar.style.opacity = "100";
            }, 50);

            ccContenar.classList.remove('hidden');
            ptContenar.classList.add('hidden');
            ptContenar.style.opacity = "0.0001";
            btnCC.classList.add('text-primary');
            btnCC.classList.remove('text-secondary');
            btnPT.classList.add('text-secondary');
            btnPT.classList.remove('text-primary');
        });

        btnPT.addEventListener('click', () => {
            setTimeout(() => {
                ptContenar.style.opacity = "100";
            }, 50);

            ptContenar.classList.remove('hidden');
            ccContenar.classList.add('hidden');
            ccContenar.style.opacity = "0.0001";
            btnPT.classList.add('text-primary');
            btnPT.classList.remove('text-secondary');
            btnCC.classList.add('text-secondary');
            btnCC.classList.remove('text-primary');
        });

        // Initialize default view to PC items visible
        btnCC.click();
        //@ts-ignore
        for (let i = 0; i < membersData.length; i++) {
            const Card = `<div class="max-w-sm hover:border-primary hover:shadow-2xl transform transition duration-300 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#3954543b] dark:border-[#3954547f]">
               
            <img class="rounded-t-lg w-[1024px]" width="1024" height="1024" src="${membersData[i]["img"]}" alt="${membersData[i]["name"]}" />
          
            <div class="p-5 flex flex-col justify-center items-center">
         
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${membersData[i]["name"]}</h5>
             
               <p class=" font-normal text-gray-700 dark:text-gray-400">${membersData[i]["description"]}</p>
               <button  onclick="window.open('${membersData[i]["instalink"]}')" class="btn w-[50%] my-5 text-lg  btn-primary">Follow</button>
            </div>
         </div>`;
            if (membersData[i]["job"] === "cc") {
                ccContenar.innerHTML += Card;
            } else {
                ptContenar.innerHTML += Card;
            }
        }





    })

}

if (window.location.pathname.includes("/apply")) {

    const choose = document.querySelector('.choose') as HTMLElement;
    const ba = document.querySelector(".ba") as HTMLElement;
    const form = document.getElementById('teamform') as HTMLFormElement;
    const tymsg = document.getElementById('tymsg') as HTMLElement;
    const homebutton = document.getElementById('backbutton') as HTMLElement;
    const ccButton = document.getElementById('ccButton') as HTMLElement;
    const espButton = document.getElementById('espButton') as HTMLElement;
    const tmButton = document.getElementById('tmButton') as HTMLElement;

    function ccButtonf() {
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
    }
    function espButtonf() {

        const esp = document.querySelector('.esport') as HTMLElement;
        const inputs = esp.querySelectorAll('input');
        inputs.forEach(function (i) {
            i.setAttribute("required", "required");
        })
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
    }
    function tmButtonf() {
        const tm = document.querySelector('.tm') as HTMLElement;
        const inputs = tm.querySelectorAll('input');
        inputs.forEach(function (i) {
            i.setAttribute("required", "required");
        })
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
    ccButton.addEventListener("click", ccButtonf);
    espButton.addEventListener("click", espButtonf);
    tmButton.addEventListener("click", tmButtonf);




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