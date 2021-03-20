// JScript File

function EnableKeys(keyType, e) {
    var keyCode;
    if (window.event) // IE
        keyCode = event.keyCode;
    else if (e.which) // Netscape/Firefox/Opera
        keyCode = e.which;

    //Numeric+Alphabets+Period
    if (keyType == 11) {
        debugger;
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode == 46) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 32) || (keyCode == 8) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) {
                // Netscape/Firefox/Opera
                e.returnValue = false;
            }
            return false;
        }
    }
//Enable only alphabets and spaces
    if (keyType == 0) {

        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 32) || (keyCode == 8) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) {
                // Netscape/Firefox/Opera
                e.returnValue = false;
            }
            return false;
        }
    }
  
    //Enable only alpha numeric values
	if(keyType == 1)
	{
		if(!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (String(keyCode) == 'undefined')))
		    return false;
	}

//    //Enable only integer values
    if (keyType == 2) {
        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
        else
            return true;
    }

    // Restrict < , > , ', ", &
    if (keyType == 10) {
        if ((keyCode ==60) || (keyCode == 62) || (keyCode == 34) || (keyCode == 38) || (keyCode == 39) ||(String(keyCode) == 'undefined')) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
        else
            return true;
    }

    //Enable only float values
    if (keyType == 3) {
        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 8) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }
    //Enable only float values and % and Dot
    if (keyType == 24) {
        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode == 46) || (keyCode == 8) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }
    //All keyboard entries disallowed
    if (keyType == 9) {
        if (window.event) // IE
            event.returnValue = false;
        else if (e.which) // Netscape/Firefox/Opera
            e.returnValue = false;
        return false;
    }
    


    if (keyType == 11) {
        if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 46) || (keyCode == 37) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }
    if (keyType == 29) 
    {
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (keyCode == 95) || (keyCode == 46) || (keyCode == 64) || (keyCode == 35)||(keyCode == 43)||(keyCode == 36)||(String(keyCode) == 'undefined'))) 
         {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }
    if (keyType == 22) {
        //alert(keyCode);
        if (keyCode == 64)
            return false;
        if (keyCode == 32)
            return true;
        if (keyCode == 47)
            return true;



        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (keyCode == 95) || (keyCode == 46) || (keyCode == 64) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }

    if (keyType == 23) {
        
        if (keyCode == 64)
            return false;
        if (keyCode == 32)
            return true;
        if (keyCode == 47)
            return true;
        if (keyCode == 44)
            return true;
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (keyCode == 95) || (keyCode == 46) || (keyCode == 64) || (String(keyCode) == 'undefined'))) {
            if (window.event) // IE
                event.returnValue = false;
            else if (e.which) // Netscape/Firefox/Opera
                e.returnValue = false;
            return false;
        }
    }
    if (keyType == 12) {
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode == 8) || (String(keyCode) == 'undefined')))
            return false;
    }

    if (keyType == 101) {
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (keyCode == 64) || (keyCode == 95) || (keyCode == 45) || (keyCode == 95) || (keyCode == 46) || (keyCode == 45) || (String(keyCode) == 'undefined')))
            return false;
    }

}

function restrictMultipleDotsPercentage(id, e) {

    var keyCode;
    if (window.event) //IE
        keyCode = event.keyCode;
    else if (e.which) //Netscape/Firefox/Opera
        keyCode = e.which;

    if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57) || (keyCode == 8) || (keyCode == 13) || (keyCode == 32) || (keyCode == 44) || (keyCode == 45) || (keyCode == 95) || (keyCode == 40) || (keyCode == 41) || (keyCode == 46) || (keyCode == 123) || (keyCode == 125) || (keyCode == 91) || (keyCode == 93) || (keyCode == 92) || (keyCode == 47) || (keyCode == 37) || (keyCode == 36) || (keyCode == 35) || (keyCode == 64) || (keyCode == 43) || (String(keyCode) == 'undefined')))
        return false;

    else {
        if (document.getElementById(id).value.indexOf('.') != -1) {
            if (keyCode == 46) //checking period
            {
                return false;
            }
        }
        if (document.getElementById(id).value.indexOf('%') != -1) {
            if (keyCode == 37) //checking %
            {
                return false;
            }
        }
        if (keyCode == 32) {

        }
    }
}