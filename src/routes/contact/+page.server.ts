import type { Actions } from './$types'
import { fail } from '@sveltejs/kit'

const required = (v: string) => v?.trim().length > 0
const emailish = (v: string) => /.+@.+\..+/.test(v)

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData()
		const name = String(form.get('name') ?? '')
		const email = String(form.get('email') ?? '')
		const body = String(form.get('body') ?? '')

		if (!required(name) || !emailish(email) || !required(body)) {
			return fail(400, { ok: false, error: 'Invalid input', values: { name, email, body } })
		}

		try {
			const nodemailer = await import('nodemailer')
			const user = process.env.GMAIL_USER
			const pass = process.env.GMAIL_APP_PASSWORD
			const to = process.env.CONTACT_TO || user

			if (!user || !pass || !to) {
				return fail(500, { ok: false, error: 'Email not configured' })
			}

			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: { user, pass },
			})

			await transporter.sendMail({
				from: `Website Contact <${user}>`,
				to,
				subject: `New contact from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
			})

			return { ok: true }
		} catch (err) {
			return fail(500, { ok: false, error: 'Failed to send' })
		}
	},
}

