export var templatesData = [{
  id: 1,
  name: 'Minimalist Portfolio',
  creator: 'Jane Doe',
  category: 'Portfolio',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=Portfolio+1',
  livePreviewUrl: '#'
}, {
  id: 2,
  name: 'Modern SaaS',
  creator: 'John Smith',
  category: 'Business',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=SaaS+1',
  livePreviewUrl: '#'
}, {
  id: 3,
  name: 'Clean Blog',
  creator: 'Alex Johnson',
  category: 'Blog',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=Blog+1',
  livePreviewUrl: '#'
}, {
  id: 4,
  name: 'Creative Agency',
  creator: 'Jane Doe',
  category: 'Business',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=Agency+1',
  livePreviewUrl: '#'
}, {
  id: 5,
  name: 'E-commerce Store',
  creator: 'Emily White',
  category: 'E-commerce',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=E-commerce+1',
  livePreviewUrl: '#'
}, {
  id: 6,
  name: 'Photographer\'s Gallery',
  creator: 'John Smith',
  category: 'Portfolio',
  previewImg: 'https://via.placeholder.com/500x375/18181B/FFFFFF?text=Portfolio+2',
  livePreviewUrl: '#'
}];
var categories = [...new Set(templatesData.map(t => t.category))];
export var uniqueCategories = ['All', ...categories];