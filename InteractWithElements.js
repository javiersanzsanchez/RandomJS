function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function selectManyOptionAndNext(selector, numberOfOptions){
	for(var i = 1; i <= numberOfOptions; i++){
		waitForElm(selector.replace("x",i)).then((elm) => {
		    elm.click();
		    delay(500).then(() => window.document.getElementById("NextButton").click());
		});
	}
}

function selectBySelectorAndNext(selector){
	waitForElm(selector).then((elm) => {
	    elm.click();
	    delay(500).then(() => window.document.getElementById("NextButton").click());
	});
}

selectBySelectorAndNext("#QID12-1-label");
selectBySelectorAndNext("#QID14-3-label");
selectBySelectorAndNext("#QID18-17-label");
selectBySelectorAndNext("[id*='QID117']");
selectManyOptionAndNext("[class*='QR-QID121-x-12']",16);
selectManyOptionAndNext("[class*='QR-QID123-x-12']", 9);
selectBySelectorAndNext("#QID122-8-label");
selectManyOptionAndNext("[class*='QR-QID21-x-12']", 20);
selectManyOptionAndNext("[class*='QR-QID22-x-8']", 4);
selectBySelectorAndNext("#QID38-2-label");
selectManyOptionAndNext("[class*='QR-QID41-x-6']", 6);
selectBySelectorAndNext("#QID46-312-label");
selectBySelectorAndNext("#QID47-128-label");
selectBySelectorAndNext("#QID55-1-label");
selectBySelectorAndNext("#QID57-2-label");
selectBySelectorAndNext("#QID60-1-label");
selectBySelectorAndNext("#QID61-1-label");
selectBySelectorAndNext("#QID62-8-label");
selectBySelectorAndNext("#QID111-1-label");
selectBySelectorAndNext("#QID78-2-label");
selectBySelectorAndNext("#QID65-5-label");
selectBySelectorAndNext("#QID66-1-label");
selectBySelectorAndNext("#QID67-1-label");
