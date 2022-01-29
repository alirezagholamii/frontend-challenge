import userApi from './user-api-adapter.js'
import userService from './user-service.js'

export const getRelevantInfractionReasons = async (username) => {
  try {
    const user = await userApi.getUserByNameAdapter(username)
    if (user === null) {
      throw 'user not found'
    }

    const userInfractions = await userApi.getUserInfractionsAdapter(user.id)
    if (userInfractions === null) {
      throw 'infractions not found'
    }
    if (userInfractions.length === 0) {
      return { mostRecent: null, worst: null }
    }

    const worst = userService.getReasonForWorstInfractionLinkified(userInfractions)
    const mostRecent = userService.getReasonForMostRecentInfractionLinkified(userInfractions)

    return { mostRecent, worst }

  } catch (error) {
    console.log('we have an error ', error)
  }
}
