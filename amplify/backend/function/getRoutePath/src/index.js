exports.handler = async (event) => {
    const {Client} = require('@googlemaps/google-maps-services-js');
    const client = new Client({})

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

    const result = await client.directions({
        params:{
            origin:event.origin,
            destination: event.destination,
            mode: event.mode,
            key: GOOGLE_API_KEY
        },
    })

    const decode = (t, e = undefined) => {
        for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) {
            a = null, h = 0, i = 0;
            do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
            n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0;
            do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
            o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c])
        }
        return d
    }

    const decoded = decode(result.data.routes[0].overview_polyline.points)

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*"
        //  },
        body: decoded,
    };
    return response;
};
