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
*/


/*

Steps to interact with webElement
1. Find the locator strategy to find webElement
2. Based on the strategy, use respective code to find webElement
3. Once webelement is found, interact with webElement. 

To find WebElement:
function -> $


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