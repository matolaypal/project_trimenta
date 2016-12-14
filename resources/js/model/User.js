/**
 * Created by Matolay Pál
 */

function User() {
    var json = new JsonCtrl();

    this.setUser = function () {
        this.hostAddress = $("input[name=hostAddress]").val();
        this.userName = $("input[name=userName]").val();
        this.password = getPwd();
        if ((this.hostAddress!="")&&(this.userName!="")&&(this.password!="")){
            json.setOption("set");
            json.setObject(this);
            json.work("user");
        }
    };

    this.getUser = function () {
        json.setOption("get");
        var data = json.work("user");
        if(data){
            this.hostAddress = data.hostAddress;
            this.userName = data.userName;
            this.password = data.password;
            return this;
        }
    };



	var getPwd = function () {
		var pwd = $("input[name=password]").val();
		// +salt(!)
		return pwd.hashCode()	
	};

    String.prototype.hashCode = function() {
        var hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };

}