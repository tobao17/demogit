function greeting (name='friend',language='en' )
{
  if (language=='en'){
 return  `hi,${name}`;
  }
  if (language=='ja'){
    return  `konnichiwa,${name}`;
  }

}
greeting('bao','ja');