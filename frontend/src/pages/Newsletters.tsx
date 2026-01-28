import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Newspaper, Envelope, Calendar, User as UserIcon, CheckCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import api from "@/lib/api"

export default function Newsletters() {
  const [newsletters, setNewsletters] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subscribing, setSubscribing] = useState(false)
  const [alertMessage, setAlertMessage] = useState<{type: 'success' | 'error', message: string} | null>(null)
  const [expandedNewsletter, setExpandedNewsletter] = useState<string | null>(null)

  useEffect(() => {
    loadNewsletters()
  }, [])

  const loadNewsletters = async () => {
    try {
      const response = await api.get('/newsletters')
      setNewsletters(response.data.data || [])
    } catch (error) {
      console.error('Failed to load newsletters:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      showAlert('error', 'Please enter your email address')
      return
    }

    setSubscribing(true)
    try {
      await api.post('/subscribers/subscribe', { email, name })
      showAlert('success', 'Successfully subscribed to our newsletter!')
      setEmail('')
      setName('')
    } catch (error: any) {
      const message = error.response?.data?.message || 'Failed to subscribe. Please try again.'
      showAlert('error', message)
    } finally {
      setSubscribing(false)
    }
  }

  const showAlert = (type: 'success' | 'error', message: string) => {
    setAlertMessage({ type, message })
    setTimeout(() => setAlertMessage(null), 5000)
  }

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-blue-950">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Newspaper size={40} weight="duotone" className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Latest News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest updates, tips, and insights about studying abroad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription Box */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Envelope size={24} weight="duotone" className="text-primary" />
                  Subscribe to Our Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest news, study abroad tips, and exclusive opportunities delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                {alertMessage && (
                  <Alert className={`mb-4 ${alertMessage.type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <AlertDescription className="flex items-center gap-2">
                      {alertMessage.type === 'success' && <CheckCircle size={20} className="text-green-600" />}
                      {alertMessage.message}
                    </AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12"
                    disabled={subscribing}
                  >
                    {subscribing ? 'Subscribing...' : 'Subscribe Now'}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Newsletters List */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Newsletters</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading newsletters...</p>
            </div>
          ) : newsletters.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Newspaper size={64} weight="duotone" className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">No newsletters published yet</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Subscribe to be the first to know when we publish new content!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {newsletters.map((newsletter: any, index: number) => (
                <motion.div
                  key={newsletter._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-2 bg-blue-600" />
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          Newsletter
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          {new Date(newsletter.publishedAt || newsletter.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{newsletter.title}</CardTitle>
                      <CardDescription className="text-base">{newsletter.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {expandedNewsletter === newsletter._id ? (
                        <div>
                          <div 
                            className="prose prose-sm max-w-none mb-4"
                            dangerouslySetInnerHTML={{ __html: newsletter.content }}
                          />
                          <Button 
                            variant="outline" 
                            onClick={() => setExpandedNewsletter(null)}
                          >
                            Show Less
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => setExpandedNewsletter(newsletter._id)}
                          className="w-full md:w-auto"
                        >
                          Read Full Newsletter
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-600 text-white border-0">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of students who trust us for their study abroad journey
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
