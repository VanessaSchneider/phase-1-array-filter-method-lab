

  
  

 

function findMatching(array, string) {
	return array.filter(name=> name.toLowerCase() === string.toLowerCase())
}





function fuzzyMatch (array, string) {
return array.filter(name=>name.slice(0,2) === string.slice(0,2))

}

function matchName(array, string) {

return array.filter(element=>element.name === string)


}