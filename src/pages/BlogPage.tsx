import React from 'react';
import blogPosts from '../data/blogPosts';
import { Card, CardContent, CardImage } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import CtaSection from '../components/sections/CtaSection';

const BlogPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Blog - BrightPoint Summit';
  }, []);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest trends, tips, and industry news in software development.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            {/* Search */}
            <div className="relative mb-6 md:mb-0 md:max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} hover={true} className="h-full flex flex-col">
                  <CardImage 
                    src={post.image} 
                    alt={post.title} 
                  />
                  <CardContent className="flex-grow flex flex-col">
                    <div className="mb-3 flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    
                    <div className="mt-auto">
                      <p className="text-gray-500 text-sm mb-3">By {post.author}</p>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-700 font-medium inline-flex items-center group"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <CtaSection 
        title="Want to Stay Updated?"
        subtitle="Subscribe to our newsletter to receive the latest insights and updates."
        buttonText="Subscribe Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default BlogPage;