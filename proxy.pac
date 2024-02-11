function FindProxyForURL(url, host) {
    PROXY = "PROXY 127.0.0.1:8080"

    // hippo.com via proxy
    if (shExpMatch(url,"*.hippo-private.com*")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
