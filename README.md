Track Form Field
================
	These track form field is simple. User defined function can be provided which will be executed 
if any field change

Requirement
-----------
	Jquery1.9

Usage
------
	Any form element can be bind using
		```javascript 
		$('any class or id or tag_name').track_field_change()
		
		```

		Whichever form field you want to track change should be added .track_change class to it	
	I have included the example in the demo folder, it show initially its submit button is disabled when 
	any form field changes submit button become active, if its(any form fields) value change to initial its again make button disabled 



