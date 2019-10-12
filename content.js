let timeout;
function showPass(ele)
{
    if (ele.tagName.toLowerCase() === 'input' && ele.type.toLowerCase() === 'password') {        
        ele.orgType = "password";
        ele.type = "text";
        timeout = setTimeout(() => {
            ele.type = "password";
            ele.orgType = undefined;
        }, 2000);
    }
}

function hideNow(ele)
{
    if (ele.tagName.toLowerCase() === 'input' && (ele.type.toLowerCase() === 'password' || ele.orgType === 'password') ) {                
        ele.type = "password";
        ele.orgType = undefined;
        clearTimeout(timeout);
    }
}

window.addEventListener('click', event => {
    event.detail === 3 && showPass(event.target);
}, true);

window.addEventListener('mouseout', event => {
    hideNow(event.target);
}, true);
