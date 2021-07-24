/* eslint-disable node/handle-callback-err */
/* eslint-disable no-unused-vars */
export default function(context,inject) {
    const appId = '5BOW0P575G';
    const apiKey= '7e850926fbdb704f15afe9db80c58a1d';
    const headers = {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId 
    }
    inject('dataApi',{
        getHome,
        getReviewByHomeId,
        getUserByHomeId
    })
    async function getHome(homeId) {
        try {
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/Lam/${homeId}`,{
                headers
                })) 
        } catch (error) {
            return getErrorResponse(error)
        }
    }
    async function getReviewByHomeId(homeId) {
        try {
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`,{
                headers,
                method: 'POST',
                body:JSON.stringify({
                    filters: `homeId:${homeId}`,
                    hitsPerPage: 6,
                    attributesToHighlight: [],
                })
                })) 
        } catch (error) {
            return getErrorResponse(error)
        }
    }
    async function getUserByHomeId(homeId) {
        try {
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/query`,{
                headers,
                method: 'POST',
                body:JSON.stringify({
                    filters: `homeId:${homeId}`,
                    attributesToHighlight: [],
                })
                })) 
        } catch (error) {
            return getErrorResponse(error)
        }
    }
    async function unwrap(response) {
        const json = await response.json();
        const {ok, status, statusText} = response
        return {
            json,
            ok,
            status,
            statusText
        }
    } 
     function getErrorResponse(error) {
        return {
            ok: 'false',
            status:500,
            statusText: error.message,
            json: {}
        }
    }
}