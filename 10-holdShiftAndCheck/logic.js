const checks = document.querySelectorAll('input[type=checkbox');

let lastChecked;

function checkAll(e){
    console.log(this,'haha')
    let flag = false;
    if(e.shiftKey && this.checked){
        checks.forEach(i => {
            if(this === i || i === lastChecked){
                flag = !flag;
            }
            if(flag){
                i.checked = true;
            }
        })
    }
    lastChecked=this;
};

checks.forEach(i => i.addEventListener('click',checkAll));