Sjax =
				function(win) {
					var isIE = /*@cc_on!@*/ !1,
						doc = win.document,
						head = doc.getElementsByTagName('head')[0];

					function request(url, success, timestamp) {
						var script = doc.createElement('script');

						function callback() {
							if (typeof jsonp != 'undefined') {
								success(jsonp);
							} else {
								alert('网络超时，请111检查网络');
							}
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
							if (head && script.parentNode) {
								head.removeChild(script);
							}
						}
						if (isIE) {
							script.onreadystatechange = function() {
								var readyState = this.readyState;
								if (readyState == 'loaded' || readyState == 'complete') {
									callback();
								}
							}
						} else {
							script.onload = function() {
								callback();
							}
						}
						if (timestamp) {
							url += '?ts=' + (new Date).getTime();
						}
						script.src = url;
						head.insertBefore(script, head.firstChild);
					}
					return {
						load: request
					};
				}(this);
