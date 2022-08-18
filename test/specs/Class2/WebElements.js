/*
WebElements

1. Text 
2. textBox
3. button 
4. radioButton
5. checkBox
6. dropDown
7. link 
8. alert 

Interactions: 
1. type
2. click
3. if it's selected
4. if it's enabled
5. if it's displayed

Document Object model (DOM)

code -> generates dom -> makes the webpage

<html> 
    <head></head>
    <body></body>
</html>


<tag1 attr1="value1" attr2="value2" attr3 attr4="value4" attr5="value5" attr6="value six"
tag -> tag1 
attributes of tags 

*/

/*
Locators: way to reach/find webElement

1. Using id-attribute
    if attribute is always going to be unique in DOM"
    To check if id-value is unique, in chropath ->//*[@id = 'idValue']

    $('#idValue')

2. Using other attributes value instead of id=attribute
    to check if any-attribute is unique in chropath -> tagName[attrName='attrValue']

    for example //button[@name='login']

    Note: the attribute value cannot have spaces

    To write it down in js:
    const webElement = $('tagName[attrName = attrValue]')   

3.  Using linktext
    To check if linkText is unique in chropath -> //tagName[text()='link text']

    const webElement = await $('=link text');

4. using partial linkText 
    To check if partial linkText is unique in chropath -> //tagName[contains(text(),'partialtext')]

    const webElement = await $('*=partial link text')
/*
Links: 
    always have a tag
<a href="https://messenger.com/" title="Check out Messenger." xpath="1">Messenger</a>
    attributes of a-tag: href, title
    text of a atag: Messenger
    text of link is known as linkTesxt
    
    value of href attribute defines where user will land on the page upon clicking 

    Note: attribute's value canot have spaces

5. Using other attribute's partial value instead id-attribute 
    
    To check if text of webElement is unique in chroPath -> ('tagName[contains(@attrName, 'partial_attrValue')]');
    const webElement = $('tagName[attrName*=partial_attrValue]')

    Note: attribute's partial value canot have spaces

6. Using Text value
    To check if text of webElement is unique in chroPath //tagName[text()='text value']
    const webElement = ${'tagName=text value}
    
7. Using partial text Value 
    To check if text of webElement is unique in chroPath -> //tagName[contains(text()='partial text value')]
    const webElement = $('tagName*=partial text value')
    
8. Using tagName
    To check if tagName with webElement is unique in chropath -> //tagName
    const webElement = $('<tagName>')

9. Using class attribute 
    To check if class attribute's value is unique in chropath -> //*[@class='classAttributeValue']
    Note: class attribute's value cannot have spaces
    const webElement = $('.classAttributeValue')

10. Using xpath 
    Types: 
    1. absolute xpath 
    a) starts with single slash / 
    b) tells the route to reach to a particular webElement from html-tag 
    c) not reliable, any change in the webPage can break the absolute xpath 
    /html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]
    
    2. relative xpath 
    a) starts with double slash //
    b) reliable because we use the tagName, attributes or text-value in any combination to create locator.
    -> direct xpath (simple xpath)
    -> indirect xpath (advanced xpath)

*/
/*
Direct xpath (simple xpath)
1. using attribute's value 
    Note: spaces in the attributes are allowed
    //tagName[@attrName="attrValue"]
    const webElement = await $('//tagName[@attrName="attrValue"])

2. using text value 
    //tagName[text()="text value"]
    find the tag(tagName) in the dom which has text equals to 'text value' 
    const webElement = await $('//tagName[text()="text value"]')

3. Using partial attribute's value
    //tagName[contains(@attrName, "partial attr value")]
    Find the tag(tagName) in the dom where attribute (attrName) contains "partial attr value"
    eg: //input[contains(@aria-label, "il add")]
    const webElement = await $('//tagName[contains(@attrName, "partial attr value")]')

4. Using partial text value
    //tagName[contains(text(), "partial text value")]
    Find the tag(tagName) in the dom where text contains "partial text value"
    eg: //a[contains(text(),"word")]
    const webElement = await $('//tagName[text(), "partial text value"]') 

5. Using start of
    //tagName[starts-with(@attr, "startOfAttrValue")]
    //span[starts-with(@class, "feels")]

    const webElement = await $('//tagName[starts-with(@attrName, "starting attr value")]')

6. Start of text 
    //tagName[starts-with(text(), "partial text value")]
    eg: //span[starts-with(text(), "Fee")] 
    const webElement = await $('//tagName[starts-with(text(), "starting text value")]')

7. Using not-operator 
    //tagName[not(@attrName='value')]
    Find the tag(tagName) in the dom where attribute(attrName) is NOT equals to "value"
    
    //tagName[@attrName]
    Find the tag(tagName) in the dom which has attribute(attrName)
    eg: //button[@disabled]

    //tagName[not(@attrName)]
    Fidn the tag(tagName) in the dom which does not have attribute(attrName)
    eg: //button[not(@disabled)]

    //tagName[not(contains(text(), "value"))]
    Find the tag(tagName) in the dom where text does NOT contain "value"

8. and/or operator
    //tagName[@attrName="attrValue" and text()="text value"]
    Find the tag(tagName) in dom, where attribute(attrName) has value = "attrValue" AND text equals to "text value"
    
    //tagName[contains(text(),"xt Val") or contains(text(), "XT VAL")]
    Find the tag(tagName) in dom, where text contaiuns "xt Val" OR text contains "XT VAL"
    
    //tagName[starts-with(@attrName, "attr v") and not (@attrName1)]
    Find the tag(tagName) in dom, where attribute(attrName) value starts with "attr v" and does NOT have attrName1-attribute

    //*[starts-with(@attrName, "attr v") nad not (@attrName1)]
    Find any tag in dom, where attribute(attrName) value starts with "attr v" and does NOT have attrName1-attribute

    //*[@attrName="attr value"]
    Find any tag in dom, where attribute(attrName) has value equals to "attr value"

9. Using parent/grandParent
    //div[@id="header"]//div[@class="selectric-wrapper selectric-units"]
    //a[@data-day="0"]//span[@class="open"] means inside

10. Using following siblings
    //label[text()="Female"]/following-sibling::input 
    //tag[condition(s)]/following-sibling::tag2[condition(s)]

    Preceding siblings
    //tag[condition(s)]/preceding-sibling::tag2[condition(s)]

    Using following 
    //tag[condition(s)]/following::tag2[condition(s)]
    eg: //a[contains(text(), 'Create a')/following::]

    Using preceding
    //tag[condition(s)/preceding::tag2[condition(s)]
    

*/


/*

Steps to interact with webElement
1. Find the locator strategy to find webElement
2. Based on the strategy, use respective code to find webElement
3. Once webelement is found, interact with webElement. 

To find WebElement:
function -> $

To find multiple WebElements:
function -> $$ (findElements)

returns Array[we1, we2, we3, we4]

Interactions: 
1. type
    function setvalue
    input: string input which is the text we want

2. click
    function: click

3. if it's selected
    function: isSelected()
    
4. if it's enabled
    function: isEnabled
    if the WebElement is enabled
        returns true
    else
        returns false

5. if it's displayed
    function: is displayed()
    if the webElement is displayed
        returns true
    else
        returns false

6. To get the text of a webelement 
    function getText()
    return type: String

7. To get the value of an attribute of a webElement
    function: getAttribute
    input: attributeName
    return type: String

*/