let isProd = process.env.NODE_ENV === 'production';

module.exports = {
  REST_ENDPOINT: JSON.stringify('http://104.248.73.159/api'),
  POSTS_PER_PAGE: JSON.stringify(9),
  GA_TRACKING_ID: JSON.stringify('UA-129495864-1'),
  REQUEST_CACHE_MAX: JSON.stringify(150),
  SITE_NAME:JSON.stringify("Lender UI"),
  
};
