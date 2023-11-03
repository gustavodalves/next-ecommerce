export default class Fetch {
    async request(
        info: RequestInfo | string
    ) {
        const fetchData = await fetch(info)
        return await fetchData.json()
    }
}
