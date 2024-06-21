function tag(name, ...children){
    const result = document.createElement(name);
    for(const child of children) {
        if(typeof(child) === 'string'){
            result.appendChild(document.createTextNode(child));
        }
		else{
            result.appendChild(child);
        }
    }

    result.att$ = function(name, value){
        this.setAttribute(name, value);
        return this;
    };

	result.onevent$ = function(event, callback){
        this.addEventListener(event, callback);
        return this;
    };
	
	result.onclick$ = function(callback){
        this.onevent$("click", callback);
		return this;
    };

    return result;
}

const grechaTags = ["canvas", "h1", "h2", "h3", "p", "a", "div", "span", "select"];

grechaTags.push = function() {Array.prototype.push.apply(this, arguments); refreshTags();};

function refreshTags(){
	for (let tagName of grechaTags) {
		window[tagName] = (...children) => tag(tagName, ...children);
	}
}

function img(src){
    return tag("img").att$("src", src);
}

function input(type){
    return tag("input").att$("type", type);
}

function router(routes){
    let result = div();

    function syncHash(){
        let hashLocation = document.location.hash.split('#')[1];
        if(!hashLocation){
            hashLocation = '/';
        }

        if(!(hashLocation in routes)){
            //En el grecha original aca habia un 404 y tal, para esta app es preferible volver a "/"
			window.location.href = "../";
			return;
        }

        result.replaceChildren(routes[hashLocation]());

        return result;
    };

    syncHash();

    // TODO(#3): there is way to "destroy" an instance of the router to make it remove it's "hashchange" callback
    window.addEventListener("hashchange", syncHash);

    result.refresh = syncHash;

    return result;
}