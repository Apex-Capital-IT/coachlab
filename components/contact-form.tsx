"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    mobilePhone: "",
    country: "",
    city: "",
    productCategories: {
      webDevelopment: false,
      uiUxDesign: false,
      dataScience: false,
      mobileDevelopment: false,
      digitalMarketing: false,
      other: false,
    },
    industry: "",
    accountCategory: "",
    message: "",
    subscription: "yes",
    privacyPolicy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name.startsWith("productCategories.")) {
        const category = name.split(".")[1]
        setFormState((prev) => ({
          ...prev,
          productCategories: {
            ...prev.productCategories,
            [category]: checked,
          },
        }))
      } else {
        setFormState((prev) => ({
          ...prev,
          [name]: checked,
        }))
      }
    } else {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      subscription: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to your server
    alert("Form submitted successfully!")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> First Name
            </Label>
            <Input id="firstName" name="firstName" value={formState.firstName} onChange={handleChange} required />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> Last Name
            </Label>
            <Input id="lastName" name="lastName" value={formState.lastName} onChange={handleChange} required />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="flex items-center">
            <span className="text-red-500 mr-1">*</span> Company
          </Label>
          <Input id="company" name="company" value={formState.company} onChange={handleChange} required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> Email
            </Label>
            <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
          </div>

          {/* Mobile Phone */}
          <div className="space-y-2">
            <Label htmlFor="mobilePhone">Mobile Phone</Label>
            <Input
              id="mobilePhone"
              name="mobilePhone"
              type="tel"
              value={formState.mobilePhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Country/Region */}
          <div className="space-y-2">
            <Label htmlFor="country" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> Country / Region
            </Label>
            <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)} required>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mongolia">Mongolia</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="russia">Russia</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="korea">South Korea</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" value={formState.city} onChange={handleChange} />
          </div>
        </div>

        {/* Product Category */}
        <div className="space-y-3">
          <Label className="flex items-center">
            <span className="text-red-500 mr-1">*</span> Product Category
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="webDevelopment"
                name="productCategories.webDevelopment"
                checked={formState.productCategories.webDevelopment}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.webDevelopment",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="webDevelopment" className="cursor-pointer">
                Web Development
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uiUxDesign"
                name="productCategories.uiUxDesign"
                checked={formState.productCategories.uiUxDesign}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.uiUxDesign",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="uiUxDesign" className="cursor-pointer">
                UI/UX Design
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dataScience"
                name="productCategories.dataScience"
                checked={formState.productCategories.dataScience}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.dataScience",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="dataScience" className="cursor-pointer">
                Data Science
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mobileDevelopment"
                name="productCategories.mobileDevelopment"
                checked={formState.productCategories.mobileDevelopment}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.mobileDevelopment",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="mobileDevelopment" className="cursor-pointer">
                Mobile Development
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="digitalMarketing"
                name="productCategories.digitalMarketing"
                checked={formState.productCategories.digitalMarketing}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.digitalMarketing",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="digitalMarketing" className="cursor-pointer">
                Digital Marketing
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="other"
                name="productCategories.other"
                checked={formState.productCategories.other}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: {
                      name: "productCategories.other",
                      type: "checkbox",
                      checked,
                    },
                  })
                }
              />
              <Label htmlFor="other" className="cursor-pointer">
                Others
              </Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industry */}
          <div className="space-y-2">
            <Label htmlFor="industry" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> Industry
            </Label>
            <Select
              value={formState.industry}
              onValueChange={(value) => handleSelectChange("industry", value)}
              required
            >
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Account Category */}
          <div className="space-y-2">
            <Label htmlFor="accountCategory" className="flex items-center">
              <span className="text-red-500 mr-1">*</span> Account Category
            </Label>
            <Select
              value={formState.accountCategory}
              onValueChange={(value) => handleSelectChange("accountCategory", value)}
              required
            >
              <SelectTrigger id="accountCategory">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="educator">Educator</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center">
            <span className="text-red-500 mr-1">*</span> Message
          </Label>
          <Textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} required />
        </div>

        {/* Subscription */}
        <div className="space-y-3">
          <Label className="flex items-center">
            <span className="text-red-500 mr-1">*</span> Subscription
          </Label>
          <RadioGroup
            value={formState.subscription}
            onValueChange={handleRadioChange}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="subscription-yes" />
              <Label htmlFor="subscription-yes" className="cursor-pointer">
                Yes, I would like to subscribe to the CoachLab Mongolia newsletter. (You are able to unsubscribe at any
                time)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="subscription-no" />
              <Label htmlFor="subscription-no" className="cursor-pointer">
                No, thanks
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Privacy Policy */}
        <div className="flex items-start space-x-2">
          <Checkbox
            id="privacyPolicy"
            name="privacyPolicy"
            checked={formState.privacyPolicy}
            onCheckedChange={(checked) =>
              handleChange({
                target: {
                  name: "privacyPolicy",
                  type: "checkbox",
                  checked,
                },
              })
            }
            required
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="privacyPolicy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              <span className="text-red-500 mr-1">*</span> I agree with CoachLab Mongolia's{" "}
              <a href="#" className="text-primary underline">
                Privacy Policy
              </a>
            </Label>
          </div>
        </div>

        <Button type="submit" className="w-full md:w-auto px-8 bg-primary">
          SUBMIT
        </Button>
      </form>
    </motion.div>
  )
}
