export const LIVE_CHAT_COUNT = 50;

const GOOGLE_API_KEY = "AIzaSyAsGEgkuHwhSPpDhtoubZPEkPckN0UH_9g"; 

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=namaste+javascript&key=" + GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${ GOOGLE_API_KEY }&textFormat=plainText&part=snippet&videoId=`;