/**It will filter the list based on data ans originalList provided.
 * It will filter list case insensitive way.
 * @param : enteredValue : string -  text.
 * @param : originalList : array - list that needs to be filtered.
 */
export function FilterList (enteredValue, originalList) {
    return originalList.filter((el) =>
        el.toLowerCase().indexOf(enteredValue.toLowerCase()) > -1
    )
}

/**It will sort the list porvided in desending order.
 * @param: list : array - list that needs to be sorted.
 */
export function SortList (list) {
    list.sort();
    list.reverse();
    return list;
}