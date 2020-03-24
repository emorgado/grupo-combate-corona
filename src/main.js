const app = function () {
  const API_CONTAINER = 'https://script.google.com/macros/s/AKfycbzGCLWmbij1YhgRGoBVZd2yQihfOs4B_qbCmkwzqBuqkF9zkIU/exec';

  function init(){
    fetch( API_CONTAINER )
			.then((response) => response.json())
			.then((json) => {
        console.log('json', json);
      })
      .catch((error) => {
				console.log('Unexpected error loading events');
			})
  }

  return {
		init: init
	};
  
}();