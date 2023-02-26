'use strict';

const user = {
  name: "John"
  };

alert (user.name);

  // это будет работать?
  user.name = "Pete";
alert (user.name);

//even though we declare that user is const
//we protect only variable 'user' not the content
  
