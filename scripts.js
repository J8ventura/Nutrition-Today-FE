// Document toggle switch
const TOGGLE_BUTTON_ID = 'toggle-btn';
const TARGET_ATTRIBUTE_VAL = 'data-toggle';
const HIDE_CLASS_NAME = 'hide';
document.getElementById(TOGGLE_BUTTON_ID).addEventListener('click', (e) => {
    console.debug('toggling nav menu');
    console.debug(e.target);
    const toggleID = e.target.getAttribute(TARGET_ATTRIBUTE_VAL);
    console.debug('toggling id', toggleID);
    const toggleElement = document.getElementById(toggleID);
    toggleElement.classList.contains(HIDE_CLASS_NAME) ? toggleElement.classList.remove(HIDE_CLASS_NAME) : toggleElement.classList.add(HIDE_CLASS_NAME);
})

//created function for Username using this.value
function Username(value)
{
//made an if/else condition depending on length of letters
	if(value.length >= 5)
   {
       document.getElementsByClassName("errorUsername")[0].style="display:none;";
   }else
   {
       document.getElementsByClassName("errorUsername")[0].style="display:block;";
   }
}
//created function for Age using this.value
function Password(value)
{
//made an if/else condition depending if a real number is used
	if(value.length >=5)
	{
       document.getElementsByClassName("errorPassword")[0].style="display:none;";
      
	}else
	{
       document.getElementsByClassName("errorPassword")[0].style="display:block;";
	}
}