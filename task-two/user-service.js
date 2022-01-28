const getWorstInfraction = (list) => (
  [...list].sort((a, b) => b.points - a.points)[0]
)

const getMostRecentInfraction = (list) => (
  [...list].sort((a, b) => b.id.localeCompare(a.id))[0]
)

const linkify = (str) => {
  const urlPattern = /\b(http|https):\/\/\S+/;
  return str.replace(urlPattern,
    match => `<a href='${match}'>${match}</a>`
  )
}

const getReasonForWorstInfractionLinkified = (infractions) => {
  const worstInfraction = { ...getWorstInfraction(infractions) }
  worstInfraction.reason = linkify(worstInfraction.reason)
  return worstInfraction.reason
}

const getReasonForMostRecentInfractionLinkified = (infractions) => {
  const mostRecentInfraction = { ...getMostRecentInfraction(infractions) }
  mostRecentInfraction.reason = linkify(mostRecentInfraction.reason)
  return mostRecentInfraction.reason
}

export default {
  getReasonForWorstInfractionLinkified,
  getReasonForMostRecentInfractionLinkified,
}