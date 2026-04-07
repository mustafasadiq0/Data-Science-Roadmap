import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      category: 'البداية',
      questions: [
        {
          question: 'هل أحتاج خلفية تقنية لتعلم تحليل البيانات؟',
          answer: 'لا، لست بحاجة لخلفية تقنية قوية للبداية. يمكنك البدء بأدوات بسيطة مثل Excel وGoogle Sheets. مع التقدم، يمكنك تعلم أدوات أكثر تقدماً مثل Python أو R. المهم هو الفضول والرغبة في التعلم.'
        },
        {
          question: 'كم من الوقت أحتاج لتعلم تحليل البيانات؟',
          answer: 'يعتمد على مستوى الخبرة المطلوب. للمستوى الأساسي (Excel وPower BI)، تحتاج 2-3 أشهر. للمستوى المتقدم مع البرمجة، قد تحتاج 6-12 شهر. المهم هو الممارسة المستمرة والعمل على مشاريع حقيقية.'
        },
        {
          question: 'ما هو أفضل مسار للمبتدئين؟',
          answer: 'ننصح بالبدء بمسار Excel وGoogle Sheets لأنه يعطي أساساً قوياً ولا يتطلب خبرة برمجية. بعدها يمكن الانتقال لـ Power BI، ثم Python حسب الاحتياج والاهتمام.'
        },
        {
          question: 'هل يمكنني تعلم تحليل البيانات مجاناً؟',
          answer: 'نعم، هناك العديد من المصادر المجانية الممتازة. يمكنك استخدام Google Sheets مجاناً، وهناك نسخة مجانية من Power BI، بالإضافة لـ Python وJupyter Notebook. مدونة مصطفى صادق وقناته على يوتيوب توفران محتوى مجاني عالي الجودة.'
        }
      ]
    },
    {
      category: 'الأدوات',
      questions: [
        {
          question: 'ما الفرق بين Excel وPower BI؟',
          answer: 'Excel ممتاز للتحليل الأساسي والجداول المحورية، بينما Power BI مصمم خصيصاً لإنشاء لوحات معلومات تفاعلية ومتقدمة. Power BI أفضل للتعامل مع البيانات الكبيرة وربط مصادر متعددة.'
        },
        {
          question: 'هل أحتاج لتعلم Python أم R؟',
          answer: 'Python أسهل للمبتدئين وله استخدامات أوسع خارج تحليل البيانات. R متخصص أكثر في الإحصاء والتحليل. ننصح بالبدء بـ Python لأنه أكثر طلباً في سوق العمل العربي.'
        },
        {
          question: 'ما هي أفضل الأدوات المجانية؟',
          answer: 'Google Sheets، Power BI Desktop (مجاني)، Python مع Jupyter Notebook، Google Colab، Tableau Public، وLibreOffice Calc. كلها أدوات قوية ومجانية تماماً.'
        },
        {
          question: 'هل أحتاج لشراء برامج مدفوعة؟',
          answer: 'ليس بالضرورة للبداية. يمكنك تعلم الأساسيات باستخدام الأدوات المجانية. عندما تصبح محترفاً، قد تحتاج لنسخ مدفوعة للمشاريع الكبيرة أو في بيئة العمل.'
        }
      ]
    },
    {
      category: 'المسار المهني',
      questions: [
        {
          question: 'ما هي الوظائف المتاحة في مجال تحليل البيانات؟',
          answer: 'محلل بيانات، محلل ذكاء تجاري، عالم بيانات، مطور لوحات معلومات، محلل أعمال، مختص تصور بيانات، ومهندس بيانات. كل وظيفة لها متطلبات ومهارات مختلفة.'
        },
        {
          question: 'كم راتب محلل البيانات؟',
          answer: 'يختلف حسب البلد والخبرة. في الدول العربية، يتراوح من 3000-15000 ريال/دينار شهرياً. في الدول الأجنبية، قد يصل لـ 100,000 دولار سنوياً. الخبرة والمهارات تحدد الراتب أكثر من الشهادة.'
        },
        {
          question: 'هل أحتاج شهادة جامعية في تحليل البيانات؟',
          answer: 'ليس بالضرورة. المهارات العملية والمشاريع أهم من الشهادة. لكن الشهادة قد تساعد في الحصول على الوظيفة الأولى. يمكن تعويض ذلك بشهادات مهنية من Google أو Microsoft أو IBM.'
        },
        {
          question: 'كيف أبني portfolio قوي؟',
          answer: 'اعمل على مشاريع متنوعة باستخدام بيانات حقيقية، انشر عملك على GitHub أو Kaggle، اكتب عن مشاريعك في مدونة، وشارك في مسابقات تحليل البيانات. الجودة أهم من الكمية.'
        }
      ]
    },
    {
      category: 'الشهادات',
      questions: [
        {
          question: 'ما هي أفضل الشهادات في تحليل البيانات؟',
          answer: 'Google Data Analytics Certificate، Microsoft Power BI Data Analyst، IBM Data Science Certificate، وشهادات Coursera المتخصصة. اختر الشهادة التي تتماشى مع مسارك المهني.'
        },
        {
          question: 'هل الشهادات المجانية معترف بها؟',
          answer: 'نعم، خاصة من الشركات الكبرى مثل Google وMicrosoft وIBM. أصحاب العمل يقدرون هذه الشهادات لأنها تركز على المهارات العملية المطلوبة في السوق.'
        },
        {
          question: 'كم تكلف الشهادات المدفوعة؟',
          answer: 'تتراوح من 50-500 دولار حسب الشهادة والمؤسسة. العديد من المنصات تقدم مساعدات مالية أو خصومات للطلاب من الدول النامية.'
        }
      ]
    },
    {
      category: 'التطبيق العملي',
      questions: [
        {
          question: 'أين أجد بيانات للتدريب؟',
          answer: 'Kaggle، البوابة السعودية للبيانات المفتوحة، Google Dataset Search، UCI Machine Learning Repository، ومواقع الحكومات التي تنشر بيانات مفتوحة. ابدأ ببيانات بسيطة ونظيفة.'
        },
        {
          question: 'كيف أتعامل مع البيانات الفوضوية؟',
          answer: 'تنظيف البيانات جزء أساسي من العمل (80% من الوقت). تعلم تقنيات إزالة القيم المفقودة، التعامل مع القيم الشاذة، وتوحيد تنسيقات البيانات. الممارسة هي أفضل طريقة للتعلم.'
        },
        {
          question: 'ما هي أكثر الأخطاء شيوعاً؟',
          answer: 'عدم فهم البيانات قبل التحليل، اختيار نوع الرسم البياني الخاطئ، تجاهل القيم المفقودة، والوصول لاستنتاجات خاطئة من الارتباط. دائماً اسأل "هل هذا منطقي؟"'
        }
      ]
    }
  ]

  let questionIndex = 0

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h1>
        <p className="text-xl text-muted-foreground">
          إجابات على أكثر الأسئلة شيوعاً حول تعلم تحليل البيانات
        </p>
      </div>

      <div className="space-y-8">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-primary" />
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.questions.map((item) => {
                const currentIndex = questionIndex++
                const isOpen = openItems.has(currentIndex)
                
                return (
                  <Card key={currentIndex} className="overflow-hidden">
                    <CardHeader className="pb-0">
                      <Button
                        variant="ghost"
                        className="w-full justify-between p-0 h-auto text-right"
                        onClick={() => toggleItem(currentIndex)}
                      >
                        <CardTitle className="text-lg text-right flex-1 py-4">
                          {item.question}
                        </CardTitle>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </CardHeader>
                    
                    {isOpen && (
                      <CardContent className="pt-0">
                        <div className="border-t pt-4">
                          <p className="leading-relaxed text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">لم تجد إجابة لسؤالك؟</h3>
        <p className="text-muted-foreground mb-4">
          تواصل معنا أو راجع المصادر التعليمية الإضافية
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="outline" asChild>
            <a href="https://mustafasadiq0.wordpress.com" target="_blank" rel="noopener noreferrer">
              زيارة مدونة مصطفى صادق
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://youtube.com/@mustafasadiq" target="_blank" rel="noopener noreferrer">
              قناة يوتيوب مصطفى صادق
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FAQ

