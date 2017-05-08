export function searchHelper(biofoods, cosmetics, supplements, $id) {
    
    let $products = [];

        for (let i = 0; i < biofoods.length; i += 1) {
            let $searchedName = biofoods[i].name;
            if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                $products.push(biofoods[i]);
            } 
        }

        for (let i = 0; i < cosmetics.length; i += 1) {
            let $searchedName = cosmetics[i].name;
            if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                $products.push(cosmetics[i]);
            } 
        }
        
        for (let i = 0; i < supplements.length; i += 1) {
            let $searchedName = supplements[i].name;
            if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                $products.push(supplements[i]);
            } 
        }

        return $products;
}