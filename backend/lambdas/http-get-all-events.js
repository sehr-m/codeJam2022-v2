const { default: axios } = require("axios");
const Responses = require("./API_Responses");
exports.handler = async (event) => {
  const pageToken = JSON.parse(event.body).pageToken;
  let eventData = (
    await axios.get(
      `https://graph.facebook.com/v13.0/me?fields=likes%2Cevents%7Bname%2Cattending_count%2Cmaybe_count%2Cnoreply_count%2Ccreated_time%7D&access_token=${pageToken}`
    )
  ).data;
  return Responses._200(eventData.events.data);
};
