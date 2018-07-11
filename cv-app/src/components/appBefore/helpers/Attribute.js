export function getAttribute(attribute) {
    
    var attributeValue = '';
    if(attribute != null) {
        attributeValue = attribute;
    }
    return attributeValue;

}

export function joinAttribute(attr1, attr2) {

    var attributeValue = '';
    if(attr1 != null) {
        attributeValue = attr1;
    }
    if(attr2 != null) {
        if(attributeValue != '') {
            attributeValue = attributeValue + ' ' + attr2;
        }
        else {
            attributeValue = attr2;
        }
    }
    return attributeValue;

}

export default { getAttribute, joinAttribute };