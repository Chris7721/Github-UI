const GITHIB_KEY = 'ddQ90ec3c4eQea4b107Q551242d8aQcd68df1Q55b21Q2d'
const getRepositories = () => `
        query{
            viewer {
                repositories(first: ${20}, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}){
                totalCount,
                nodes {
                    name,
                    forkCount,
                    isPrivate,
                    url,
                    stargazerCount,
                    primaryLanguage{
                    name,
                    color,
                    },
                    nameWithOwner
                    createdAt
                }
                }
            }
        }
        
        `;
        
export const APIOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GITHIB_KEY.split('Q').join('')}`
    },
    body: JSON.stringify({
      query: getRepositories()
    })
  };

export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

export const classExits = (el, elClass) => el.className.split(' ').includes(elClass)
  