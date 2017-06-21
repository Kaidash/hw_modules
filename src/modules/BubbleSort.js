/**
 * Created by nikita on 21.06.17.
 */
export default (array) => {
	array.forEach(()=>{
		array.forEach((innerItem, innerIndex)=>{
			if(array[innerIndex+1] !== undefined && innerItem > array[innerIndex + 1]) {
				array.splice(innerIndex, (innerIndex + 2) - innerIndex, array[innerIndex + 1], array[innerIndex]);
			}
		});
	});
	return array
}