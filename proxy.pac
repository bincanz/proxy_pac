function FindProxyForURL(url, host) {
    PROXY = "PROXY 127.0.0.1:8080"

    // hippo.com via proxy
    if (shExpMatch(url,"*.hippo-private.com*") ||
        isInNet(host, "10.132.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
