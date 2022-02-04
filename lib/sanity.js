import sanityClient from "@sanity/client"; 


export const client = sanityClient({
    projectId: 'b7ced7sz', 
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk8bzKNlrSDQG2PdtdgRlGmKsgF495JO5sWHImzyjHebsW3IKgM6yn6QMN8NHD0jmiSLchHZluYXFb8QnwDEpto5fEhTqBsfDRwSyp9P0YOHATamcJWsLHgeNU19uMj81TguNMu8ZMd9ZP0kbaI52uGtnqiwXS1JRQWeLZ5NMuKMHP0nwyDV',
    useCdn: false, 
})